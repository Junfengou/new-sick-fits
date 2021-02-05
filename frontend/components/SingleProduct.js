import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import DisplayError from "./ErrorMessage";
import formatMoney from "../lib/formatMoney";
import Head from "next/head";
import styled from "styled-components";

const ProductStyles = styled.div`
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	min-height: 800px;
	max-width: var(--maxWidth);
	align-items: top;
	gap: 2rem;
	img {
		width: 100%;
		object-fit: contain;
	}
`;

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		Product(where: { id: $id }) {
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

function SingleProductPage({ id }) {
	const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
		variables: {
			id,
		},
	});

	console.log(data);

	if (loading) return <p>Loading...</p>;
	if (error) return <DisplayError error={error} />;

	const {
		Product: { name, price, description, photo },
	} = data;

	return (
		<ProductStyles>
			<Head>
				<title>Sick Fits | {name}</title>
			</Head>
			<img src={photo.image.publicUrlTransformed} alt={name} />
			<div className="details">
				<h2>{name}</h2>
				<p>{description}</p>
			</div>
			<p>{formatMoney(price)}</p>
		</ProductStyles>
	);
}

export default SingleProductPage;
