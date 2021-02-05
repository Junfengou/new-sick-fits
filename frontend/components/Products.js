import React from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import Product from "./Product";
import { useQuery } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
	query ALL_PRODUCTS_QUERY {
		allProducts {
			id
			name
			price
			description
			photo {
				id
				image {
					publicUrlTransformed
				}
			}
		}
	}
`;

const ProductList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 60px;
`;

function Products() {
	const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
	// console.log(data);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	return (
		<div>
			<ProductList>
				{data.allProducts.map((item) => (
					<Product key={item.id} item={item} />
				))}
			</ProductList>
		</div>
	);
}

export default Products;
