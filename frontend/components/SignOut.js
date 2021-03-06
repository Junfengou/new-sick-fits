import React from "react";
import gql from "graphql-tag";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";

const SIGNOUT_MUTATION = gql`
	mutation {
		endSession
	}
`;

function SignOut() {
	const [signout] = useMutation(SIGNOUT_MUTATION, {
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	});

	return (
		<button type="button" onClick={signout}>
			Sign Out
		</button>
	);
}

export default SignOut;
