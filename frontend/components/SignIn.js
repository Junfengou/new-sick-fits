import React from "react";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import gql from "graphql-tag";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($email: String!, $password: String!) {
		authenticateUserWithPassword(email: $email, password: $password) {
			... on UserAuthenticationWithPasswordSuccess {
				item {
					id
					email
					name
				}
			}
			... on UserAuthenticationWithPasswordFailure {
				code
				message
			}
		}
	}
`;

function SignIn() {
	const { inputs, handleChange, resetForm } = useForm({
		email: "",
		password: "",
	});

	const [authenticateUserWithPassword, { data, loading }] = useMutation(
		SIGNIN_MUTATION,
		{
			variables: inputs,
			// refetch the currently logged in user
			refetchQueries: [{ query: CURRENT_USER_QUERY }],
		}
	);

	const error =
		data?.authenticateUserWithPassword.__typename ===
		"UserAuthenticationWithPasswordFailure"
			? data?.authenticateUserWithPassword
			: undefined;

	async function handleSubmit(e) {
		e.preventDefault();
		// console.log(inputs);

		// Send the email and password to graphql API
		await authenticateUserWithPassword();
		resetForm();
		/*
		Router.push({
				pathname: `/products`,
			});
		*/
	}

	return (
		<Form method="POST" onSubmit={handleSubmit}>
			<h2>Sign into your account</h2>
			<Error error={error} />
			<fieldset>
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

				<label>
					Password
					<input
						type="password"
						name="password"
						placeholder="password"
						value={inputs.password}
						onChange={handleChange}
					/>
				</label>

				<button type="submit">Sign In</button>
			</fieldset>
		</Form>
	);
}

export default SignIn;
