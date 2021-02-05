import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const DELETE_PRODUCT_MUTATION = gql`
	mutation DELETE_PRODUCT_MUTATION($id: ID!) {
		deleteProduct(id: $id) {
			id
			name
		}
	}
`;

/*
    payload is what gets return 

    Side note: Instead of refetching the data everytime after deleting an item, just delete it from the cache 

*/
function update(cache, payload) {
	console.log(payload);
	console.log("Running the update function after delete");
	cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct({ id, children }) {
	const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT_MUTATION, {
		variables: { id },
		update: update,
	});

	return (
		<button
			type="button"
			disabled={loading}
			onClick={() => {
				if (confirm("You sure?")) {
					// delete it
					console.log("deleting");
					deleteProduct().catch((err) => alert(err.message));
				}
			}}
		>
			{children}
		</button>
	);
}

export default DeleteProduct;
