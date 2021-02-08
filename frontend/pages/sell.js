import React from "react";
import CreateProduct from "../components/CreateProduct";
import PleaseSignIn from "../components/PleaseSignIn";

function sell() {
	return (
		<div>
			{/* This will just direct the user to sign in from any page if theyre signed out */}
			<PleaseSignIn>
				<CreateProduct />
			</PleaseSignIn>
		</div>
	);
}

export default sell;
