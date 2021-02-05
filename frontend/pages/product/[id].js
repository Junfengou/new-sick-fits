import SingleProductPage from "../../components/SingleProduct";

function SingleProduct({ query }) {
	return (
		<div>
			<SingleProductPage id={query.id} />
		</div>
	);
}

export default SingleProduct;
