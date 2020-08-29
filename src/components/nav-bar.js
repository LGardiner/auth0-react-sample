import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/external-api"
      exact
      activeClassName="router-link-exact-active"
    >
      External API
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

export function NavBar({ user, ...props }) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
}

function mapStateToProps(state) {
  return {
    // apiCallsInProgress: state.apiCallsInProgress,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      // loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      // loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      // deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
