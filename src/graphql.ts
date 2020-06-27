import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

const api = process.env.API_URL || "://www.madhouseminers.com/graphql";
const httpLink = new HttpLink({
  uri: `${process.env.NODE_ENV === "DEV" ? "http" : "https"}${api}`,
  headers: { authorization: sessionStorage.getItem("token") },
});
const wsLink = new WebSocketLink({
  uri: `${process.env.NODE_ENV === "DEV" ? "ws" : "wss"}${api}`,
  options: {
    reconnect: true,
  },
  webSocketImpl: WebSocket,
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: sessionStorage.getItem("token"),
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});
