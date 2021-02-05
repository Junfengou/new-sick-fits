import React from "react";
import useForm from "../lib/useForm";
import Form from "./styles/Form";
import gql from "graphql-tag";
import DisplayError from "./ErrorMessage";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { ALL_PRODUCTS_QUERY } from "./Products";

const CREATE_PRODUCT_MUTATION = gql`
	mutation CREATE_PRODUCT_MUTATION(
		# Which variables are getting passed in and what type is it
		$name: String!
		$description: String!
		$price: Int!
		$image: Upload
	) {
		createProduct(
			data: {
				name: $name
				description: $description
				price: $price
				status: "AVAILABLE"
				photo: { create: { image: $image, altText: $name } }
			}
		) {
			id
			name
			description
			price
		}
	}
`;

function CreateProduct() {
	const { inputs, handleChange, resetForm, clearForm } = useForm({
		image: "",
		name: "",
		price: 0,
		description: "",
	});

	const [createProduct, { loading, error, data }] = useMutation(
		CREATE_PRODUCT_MUTATION,
		{
			// Dumping all the variables in here
			variables: inputs,
			refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
		}
	);
	// console.log(createProduct);
	return (
		<Form
			onSubmit={async (e) => {
				e.preventDefault();
				// console.log(inputs);

				const res = await createProduct();
				clearForm();

				// Go to the product's page
				Router.push({
					pathname: `/product/${res.data.createProduct.id}`,
				});
			}}
		>
			<DisplayError error={error} />
			<fieldset disabled={loading} aria-busy={loading}>
				<label htmlFor="image">Image</label>
				<input
					type="file"
					id="image"
					name="image"
					onChange={handleChange}
					required
				/>

				<label htmlFor="name">name</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="name"
					value={inputs.name}
					onChange={handleChange}
				/>

				<label htmlFor="name">price</label>
				<input
					type="number"
					id="price"
					name="price"
					placeholder="price"
					value={inputs.price}
					onChange={handleChange}
				/>

				<label htmlFor="name">description</label>
				<textarea
					id="description"
					name="description"
					placeholder="description"
					value={inputs.description}
					onChange={handleChange}
				/>
				<button type="submit">Add product</button>
			</fieldset>
		</Form>
	);
}

export default CreateProduct;
