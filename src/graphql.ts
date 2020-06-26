import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
// import * as ws from "ws";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const api = process.env.API_URL;
const httpLink = new HttpLink({
  uri: `${process.env.NODE_ENV === "DEV" ? "http" : "https"}${api}`,
  headers: { authorization: process.env.GRAPHQL_TOKEN },
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

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
