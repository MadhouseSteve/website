import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";

const apolloClient = new ApolloClient({
  uri: "http://localhost:8080/graphql",
});

export default () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <NavBar />
        <div id="content">
          <Switch>
            <Route path="/" exact={true}>
              <Homepage />
            </Route>
            <Route path="/login" exact={true}>
              <Login />
            </Route>
            <Route path="/register" exact={true}>
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};
