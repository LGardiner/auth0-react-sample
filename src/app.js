import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Footer, Loading, PrivateRoute } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import { loadUserRatings } from "./redux/actions/userActions";
import { connect } from "react-redux";

import "./app.css";
import LoginButton from "./components/login-button";

export function App({ loadUserRatings, ...props }) {
	const { isLoading, isAuthenticated, user } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}
	if (isAuthenticated) {
		loadUserRatings(user.sub.replace("google-oauth2|", "")).catch((error) => {
			alert("Loading authors failed" + error);
		});
	}

	return (
		<div id="app" className="d-flex flex-column h-100">
			{isAuthenticated ? (
				<>
					<NavBar />
					<Container className="flex-grow-1 mt-5">
						<Switch>
							<Route path="/" exact component={Home} />
							{/* <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/external-api" component={ExternalApi} /> */}
						</Switch>
					</Container>
				</>
			) : (
				<Container className="flex-grow-1 mt-5 text-center">
					<h2 className="mb-4">Rating Index</h2>
					<LoginButton />
				</Container>
			)}
			<Footer />
		</div>
	);
}

function mapStateToProps(state) {
	return {
		// user: state.user,
	};
}

const mapDispatchToProps = {
	loadUserRatings,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
