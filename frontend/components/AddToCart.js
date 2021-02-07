import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";
import { useCart } from "../lib/CartState";

const ADD_TO_CART_MUTATION = gql`
	mutation ADD_TO_CART_MUTATION($id: ID!) {
		addToCart(productId: $id) {
			id
		}
	}
`;

function AddToCart({ id }) {
	const { toggleCart } = useCart();
	const [addToCart, { loading }] = useMutation(ADD_TO_CART_MUTATION, {
		variables: { id },
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	});

	return (
		<button
			disabled={loading}
			type="button"
			onClick={() => {
				addToCart(), toggleCart();
			}}
		>
			Add{loading && "ing"} To Cart 🛒
		</button>
	);
}

export default AddToCart;
