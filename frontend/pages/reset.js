import React from "react";
import RequestReset from "../components/RequestReset";
import Reset from "../components/Reset";

function reset({ query }) {
	if (!query?.token) {
		return (
			<div>
				<p>Sorry! You must supply a token!</p>
				<RequestReset />
			</div>
		);
	}

	return (
		<div>
			<p>Reset your password {query.token}</p>
			<Reset token={query.token} />
		</div>
	);
}

export default reset;
