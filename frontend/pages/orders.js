import React from "react";
import gql from "graphql-tag";
import ErrorMessage from "../components/ErrorMessage";
import styled from "styled-components";
import OrderItemStyles from "../components/styles/OrderItemStyles";
import Link from "next/link";
import Head from "next/head";
import formatMoney from "../lib/formatMoney";
import { useQuery } from "@apollo/client";

const USER_ORDER_QUERY = gql`
	query USER_ORDER_QUERY {
		allOrders {
			id
			charge
			total
			user {
				id
			}
			items {
				id
				name
				description
				quantity
				price
				photo {
					image {
						publicUrlTransformed
					}
				}
			}
		}
	}
`;

const OrderUl = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 4rem;
`;

function countItemsInOrder(order) {
	return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

function order() {
	const { data, error, loading } = useQuery(USER_ORDER_QUERY);
	if (loading) return <p>Loading...</p>;
	if (error) return <ErrorMessage error={error} />;

	const { allOrders } = data;

	console.log(allOrders);

	return (
		<div>
			<Head>
				<title>Sick Fits | Your orders </title>
			</Head>

			<h2>You have {allOrders.length} orders</h2>
			<OrderUl>
				{allOrders.map((order) => (
					<OrderItemStyles key={order.id}>
						<Link href={`/order/${order.id}`}>
							<a>
								<div className="order-meta">
									<p>{countItemsInOrder(order)} items</p>
									<p>
										{order.items.length} Product
										{order.items.length === 1 ? "" : "s"}
									</p>
									<p>{formatMoney(order.total)}</p>
								</div>
								<div className="images">
									{order.items.map((item) => (
										<img
											key={`image-${item.id}`}
											src={item.photo?.image?.publicUrlTransformed}
											alt={item.name}
										/>
									))}
								</div>
							</a>
						</Link>
					</OrderItemStyles>
				))}
			</OrderUl>
		</div>
	);
}

export default order;
