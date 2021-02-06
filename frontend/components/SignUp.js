import React from "react";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import gql from "graphql-tag";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";

const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION(
		$name: String!
		$email: String!
		$password: String!
	) {
		createUser(data: { name: $name, email: $email, password: $password }) {
			id
			email
			name
		}
	}
`;

function SignUp() {
	const { inputs, handleChange, resetForm } = useForm({
		email: "",
		password: "",
		name: "",
	});

	const [createUser, { data, error, loading }] = useMutation(SIGNUP_MUTATION, {
		variables: inputs,
		// refetch the currently logged in user
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	});

	async function handleSubmit(e) {
		e.preventDefault();
		// console.log(inputs);

		// Send the email and password to graphql API
		await createUser().catch(console.error);
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
			<h2>Sign up for an account</h2>
			<Error error={error} />
			<fieldset>
				{data?.createUser && (
					<p>
						Signed up with {data.createUser.email} - Please go ahead and sign
						in!
					</p>
				)}
				<label>
					Name
					<input
						type="name"
						name="name"
						placeholder="Your Name"
						autoComplete="name"
						value={inputs.name}
						onChange={handleChange}
					/>
				</label>

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

				<button type="submit">Sign Up</button>
			</fieldset>
		</Form>
	);
}

export default SignUp;
