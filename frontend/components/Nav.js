import React from "react";
import Link from "next/link";
import NavStyles from "../components/styles/NavStyles";
import useUser from "./User";
import SignOut from "./SignOut";
import { useCart } from "../lib/CartState";
import CartCount from "./CartCount";

function Nav() {
	const user = useUser();
	const { cartOpen, toggleCart } = useCart();
	// console.log(user);
	return (
		<NavStyles>
			<Link href="/products">products </Link>
			{user && (
				<>
					<Link href="/sell">sell </Link>
					<Link href="/orders">orders </Link>
					<Link href="/account">account </Link>
					<SignOut />
					<button type="button" onClick={toggleCart}>
						Open cart
						<CartCount
							count={user.cart.reduce(
								(tally, cartItem) => tally + cartItem.quantity,
								0
							)}
						/>
					</button>
				</>
			)}

			{!user && (
				<>
					<Link href="/signin">Sign In</Link>
				</>
			)}

			{/* <Link href="/cart">cart </Link> */}
		</NavStyles>
	);
}

export default Nav;
