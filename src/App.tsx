import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient, { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

import Homepage from "./pages/homepage";
import ReviewList from "./pages/review_list";
import ReviewApplication from "./pages/review_application";
import Login from "./pages/login";
import Register from "./pages/register";
import Whitelist from "./pages/whitelist";

import User from "./models/User";
import ForgottenPW from "./pages/forgot_pw";
import ResetPW from "./pages/reset_pw";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  request: (operation) => {
    const token = sessionStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token ? `${token}` : "",
      },
    });
  },
  uri: "http://localhost:8080/graphql",
});

export const UserContext = React.createContext<User | null>(null);

export interface LoginPayload {
  user: User;
  token: string;
}

async function fetchUser(): Promise<User | null> {
  const FETCH_PROFILE = gql`
    query {
      profile {
        id
        email
        displayName
        reviewer
        whitelist {
          feedback
          status
        }
      }
    }
  `;

  const { data } = await apolloClient.query({ query: FETCH_PROFILE });

  return data.profile;
}

export default () => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(
    sessionStorage.getItem("token")
  );

  React.useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
      fetchUser()
        .then(setUser)
        .catch(() => sessionStorage.removeItem("token"));
    } else {
      sessionStorage.removeItem("token");
      setUser(null);
      apolloClient.resetStore();
    }
  }, [token]);

  function loginSuccess(payload: LoginPayload) {
    setToken(payload.token);
  }

  return (
    <ApolloProvider client={apolloClient}>
      <UserContext.Provider value={user}>
        <Router>
          <NavBar setToken={setToken} />
          <div id="content">
            <Switch>
              <Route path="/" exact={true}>
                <Homepage />
              </Route>
              <Route path="/login" exact={true}>
                <Login setUser={loginSuccess} />
              </Route>
              <Route path="/register" exact={true}>
                <Register setUser={loginSuccess} />
              </Route>
              <Route path="/forgot_pw" exact={true}>
                <ForgottenPW />
              </Route>
              <Route path="/reset_pw/:token" exact={true}>
                <ResetPW setUser={loginSuccess} />
              </Route>
              <Route path="/whitelist" exact={true}>
                <Whitelist />
              </Route>
              <Route path="/whitelist/review" exact={true}>
                <ReviewList />
              </Route>
              <Route path="/whitelist/review/:id" exact={true}>
                <ReviewApplication />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </ApolloProvider>
  );
};
