import React from "react";
import Link from "next/link";
import NavStyles from "../components/styles/NavStyles";
import useUser from "./User";
import SignOut from "./SignOut";

function Nav() {
	const user = useUser();
	console.log(user);
	return (
		<NavStyles>
			<Link href="/products">products </Link>
			{user && (
				<>
					<Link href="/sell">sell </Link>
					<Link href="/orders">orders </Link>
					<Link href="/account">account </Link>
					<SignOut />
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
