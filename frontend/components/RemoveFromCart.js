import React from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { CURRENT_USER_QUERY } from "./User";

const BigButton = styled.button`
	font-size: 3rem;
	background: none;
	border: 0;
	&:hover {
		color: var(--red);
		cursor: pointer;
	}
`;

const REMOVE_FROM_CART = gql`
	mutation REMOVE_FROM_CART($id: ID!) {
		deleteCartItem(id: $id) {
			quantity
		}
	}
`;

/*
function update(cache, payload) {
	cache.evict(cache.identify(payload.data.deleteCartItem));
}
*/

function RemoveFromCart({ id }) {
	const [deleteCartItem, { loading }] = useMutation(REMOVE_FROM_CART, {
		variables: { id },
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	});

	return (
		<BigButton
			disabled={loading}
			type="button"
			onClick={deleteCartItem}
			title="Remove This Item from Cart"
		>
			&times;
		</BigButton>
	);
}

export default RemoveFromCart;
