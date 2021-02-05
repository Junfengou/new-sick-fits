import { useRouter } from "next/dist/client/router";
import React from "react";
import Pagination from "../../components/Pagination";
import Products from "../../components/Products";

function products() {
	const { query } = useRouter();
	const page = Number(query.page);
	return (
		<div>
			<Pagination page={page || 1} />
			<Products page={page || 1} />
			<Pagination page={page || 1} />
		</div>
	);
}

export default products;
