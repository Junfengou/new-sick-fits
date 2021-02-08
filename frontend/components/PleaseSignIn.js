/* Gated sign in component 
    that will force user to sign back in before performing any CRUD operations

    This live in the sell page
*/

import React from "react";
import useUser from "./User";
import Signin from "./SignIn";

function PleaseSignIn({ children }) {
	const me = useUser();

	if (!me) return <Signin />;

	return children;
}

export default PleaseSignIn;
