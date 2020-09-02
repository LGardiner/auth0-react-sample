import React from "react";

const logo = "https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.svg";

const Hero = () => (
	<div className="text-center hero my-5">
		<p className="lead">
			This is a sample application that demonstrates an authentication flow for
			an SPA, using{" "}
			<a
				target="_blank"
				rel="noopener noreferrer"
				href="https://auth0.com/docs/quickstart/spa/react"
			>
				React.js
			</a>
		</p>
	</div>
);

export default Hero;
