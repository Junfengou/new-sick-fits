import React from "react";
import CartStyles from "./styles/CartStyles";
import useUser from "./User";
import Supreme from "./styles/Supreme";
import styled from "styled-components";
import formatMoney from "../lib/formatMoney";
import calcTotalPrice from "../lib/calcTotalPrice";
import CloseButton from "./styles/CloseButton";
import { useCart } from "../lib/CartState";
import RemoveFromCart from "./RemoveFromCart";

// CartStyles => video: #44

const CartItemStyles = styled.li`
	padding: 1rem 0;
	border-bottom: 1px solid var(--lightGrey);
	display: grid;
	grid-template-columns: auto 1fr auto;
	img {
		margin-right: 1rem;
	}

	h3,
	p {
		margin: 0;
	}
`;

const CartItem = (item) => {
	const { id, product, name, quantity } = item.item;
	if (!product) return null;
	return (
		<CartItemStyles>
			<img
				width="100"
				src={product.photo.image.publicUrlTransformed}
				alt={name}
			/>
			<div>
				<h3>{product.name}</h3>
				<p>{formatMoney(product.price * quantity)}</p>
				<p>
					Quantity: {quantity} - <em>{formatMoney(product.price)} </em>
				</p>
				<RemoveFromCart id={id} />
			</div>
		</CartItemStyles>
	);
};

function Cart() {
	// Just a query for current logged in user
	const me = useUser();

	// Context API
	const { cartOpen, toggleCart } = useCart();

	if (!me) return null;
	return (
		<CartStyles open={cartOpen}>
			<header>
				<Supreme>{me.name}</Supreme>
				<CloseButton onClick={toggleCart}>&times;</CloseButton>
			</header>
			<ul>
				{me.cart.map((item, i) => (
					<CartItem key={i} item={item} />
				))}
			</ul>
			<footer>Total: {formatMoney(calcTotalPrice(me.cart))}</footer>
		</CartStyles>
	);
}

export default Cart;
