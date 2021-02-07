import React from "react";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import gql from "graphql-tag";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";

const REQUEST_RESET_MUTATION = gql`
	mutation REQUEST_RESET_MUTATION($email: String!) {
		sendUserPasswordResetLink(email: $email) {
			code
			message
		}
	}
`;

function RequestReset() {
	const { inputs, handleChange, resetForm } = useForm({
		email: "",
	});

	const [sendUserPasswordResetLink, { data, error, loading }] = useMutation(
		REQUEST_RESET_MUTATION,
		{
			variables: inputs,
			// refetch the currently logged in user
			refetchQueries: [{ query: CURRENT_USER_QUERY }],
		}
	);

	async function handleSubmit(e) {
		e.preventDefault();
		// console.log(inputs);

		// Send the email and password to graphql API
		await sendUserPasswordResetLink().catch(console.error);
		resetForm();
	}

	/*
    const error =
		data?.authenticateUserWithPassword.__typename ===
		"UserAuthenticationWithPasswordFailure"
			? data?.authenticateUserWithPassword
			: undefined;
    */

	return (
		<Form method="POST" onSubmit={handleSubmit}>
			<h2>Request for password reset</h2>
			<Error error={error} />
			<fieldset>
				{data?.sendUserPasswordResetLink === null && (
					<p>Success! Check your email for the link</p>
				)}

				<label>
					Email
					<input
						type="email"
						name="email"
						placeholder="email"
						autoComplete="email"
						value={inputs.email}
						onChange={handleChange}
					/>
				</label>

				<button type="submit"> Password Reset</button>
			</fieldset>
		</Form>
	);
}

export default RequestReset;
