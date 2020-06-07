import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Whitelist from "./pages/whitelist";

import WhitelistBanner from "./components/WhitelistBanner";

import User from "./models/User";

const apolloClient = new ApolloClient({
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
    }
  }, [token]);

  function loginSuccess(payload: LoginPayload) {
    setToken(payload.token);
  }

  function doLogout(e: React.MouseEvent) {
    e.preventDefault();
    setToken(null);
  }

  return (
    <ApolloProvider client={apolloClient}>
      <UserContext.Provider value={user}>
        <Router>
          <NavBar doLogout={doLogout} />
          <WhitelistBanner />
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
              <Route path="/whitelist" exact={true}>
                <Whitelist />
              </Route>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </ApolloProvider>
  );
};
