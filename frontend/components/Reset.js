import React from "react";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import gql from "graphql-tag";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";

const RESET_MUTATION = gql`
	mutation RESET_MUTATION(
		$email: String!
		$token: String!
		$password: String!
	) {
		redeemUserPasswordResetToken(
			email: $email
			token: $token
			password: $password
		) {
			code
			message
		}
	}
`;

function Reset({ token }) {
	const { inputs, handleChange, resetForm } = useForm({
		email: "",
		password: "",
		token,
	});

	const [redeemUserPasswordResetToken, { data, loading, error }] = useMutation(
		RESET_MUTATION,
		{
			variables: inputs,
		}
	);

	const successfulError = data?.redeemUserPasswordResetToken?.code
		? data?.redeemUserPasswordResetToken
		: undefined;

	async function handleSubmit(e) {
		e.preventDefault();
		console.log(inputs);

		// Send the email and password to graphql API
		const res = await redeemUserPasswordResetToken().catch(console.error);
		console.log(res);
		console.log({ data, loading, error });
		resetForm();
	}

	return (
		<Form method="POST" onSubmit={handleSubmit}>
			<h2>Reset your password</h2>
			<Error error={error || successfulError} />
			<fieldset>
				{data?.redeemUserPasswordResetToken === null && (
					<p>Success! You can now sign in</p>
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

				<button type="submit">Request Password Reset</button>
			</fieldset>
		</Form>
	);
}

export default Reset;
