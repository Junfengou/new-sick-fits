import React from "react";
import ItemStyles from "./styles/ItemStyles";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";
import DeleteProduct from "./DeleteProduct";

function Product({ item }) {
	const { id, name, price, description, photo } = item;
	return (
		<ItemStyles>
			<img src={photo?.image?.publicUrlTransformed} alt={name} />
			<Title>
				<Link href={`/product/${id}`}>{name}</Link>
			</Title>
			<PriceTag>{formatMoney(price)}</PriceTag>
			<p>{description}</p>

			{/* TODO: add buttons to edit and delete item */}
			<div className="buttonList">
				<Link
					href={{
						pathname: "/update",
						query: {
							id: id,
						},
					}}
				>
					Edit item 🔧🔨
				</Link>
				<DeleteProduct id={id}>Delete 💀</DeleteProduct>
			</div>
		</ItemStyles>
	);
}

export default Product;
