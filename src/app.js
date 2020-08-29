import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading, PrivateRoute } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import { loadUserRatings } from "./redux/actions/userActions";
import { connect } from "react-redux";

import "./app.css";

export function App({ loadUserRatings, user, ...props }) {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    console.log("is auth ayo");

    loadUserRatings().catch((error) => {
      alert("Loading authors failed" + error);
    });
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  loadUserRatings,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
