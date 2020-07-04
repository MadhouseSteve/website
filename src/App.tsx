import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

const Homepage = React.lazy(() => import("./pages/homepage"));
const ReviewList = React.lazy(() => import("./pages/review_list"));
const ReviewApplication = React.lazy(() =>
  import("./pages/review_application")
);
const Login = React.lazy(() => import("./pages/login"));
const Register = React.lazy(() => import("./pages/register"));
const Whitelist = React.lazy(() => import("./pages/whitelist"));
const ForgottenPW = React.lazy(() => import("./pages/forgot_pw"));
const ResetPW = React.lazy(() => import("./pages/reset_pw"));
const Verify = React.lazy(() => import("./pages/verify"));

import { gql } from "apollo-boost";
import { apolloClient } from "./graphql";
import User from "./models/User";

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
          <main>
            <div id="content">
              <React.Suspense fallback={<div>Loading</div>}>
                <Switch>
                  <Route path="/" exact={true}>
                    <Homepage />
                  </Route>
                  <Route path="/login" exact={true}>
                    <Login setUser={loginSuccess} />
                  </Route>
                  <Route path="/register" exact={true}>
                    <Register />
                  </Route>
                  <Route path="/forgot_pw" exact={true}>
                    <ForgottenPW />
                  </Route>
                  <Route path="/reset_pw/:token" exact={true}>
                    <ResetPW setUser={loginSuccess} />
                  </Route>
                  <Route path="/verify/:token" exact={true}>
                    <Verify setUser={loginSuccess} />
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
              </React.Suspense>
            </div>
          </main>
        </Router>
      </UserContext.Provider>
    </ApolloProvider>
  );
};
