import React from "react";

function calcTotalPrice(cart) {
	return cart.reduce((tally, cartItem) => {
		if (!cartItem.product) return tally; // product can be deleted, but still can be in your cart

		return tally + cartItem.quantity * cartItem.product.price;
	}, 0);
}

export default calcTotalPrice;
