import React from "react";
import gql from "graphql-tag";
import { resetIdCounter, useCombobox } from "downshift";
import { SearchStyles, DropDown, DropDownItem } from "./styles/DropDown";
import { useLazyQuery } from "@apollo/client";
import debounce from "lodash.debounce";
import { useRouter } from "next/router";

const SEARCH_PRODUCT_QUERY = gql`
	query SEARCH_PRODUCT_QUERY($searchTerm: String!) {
		searchTerm: allProducts(
			where: {
				OR: [
					{ name_contains_i: $searchTerm }
					{ description_contains_i: $searchTerm }
				]
			}
		) {
			id
			name
			photo {
				image {
					publicUrlTransformed
				}
			}
		}
	}
`;

function Search() {
	// Instead of doing [useQuery] that happens on page load, we want to instantly query it by command
	// Always bypass the apollo cache and go straight to the network
	const [findItems, { data, loading, error }] = useLazyQuery(
		SEARCH_PRODUCT_QUERY,
		{
			//IMPORTANT: if you don't do this, it will only query whatever item is on the current pagination page
			fetchPolicy: "no-cache",
		}
	);

	/*
        The purpose of this line of code is to prevent the server from crashing. 
        Generally when a user type in the search, each key up event will trigger a call back to the server. When there's excessive
        amount of calls back to the server in a short amount of time, it will DDoS your backend. 

        One good way to prevent that from happening is to use [debounce()] and set a timer on howevery many seconds you wanna wait before
        sending the request as a package back to the server instead of sending a request back after every key up event
     */
	const findItemButChillBruh = debounce(findItems, 350);

	// This takes care any server side rendering issues you may have
	resetIdCounter();

	const items = data?.searchTerm || [];

	const router = useRouter();

	const {
		isOpen,
		inputValue,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		getItemProps,
		highlightedIndex,
	} = useCombobox({
		items: items,
		// Fire when input detected in the search box
		onInputValueChange() {
			console.log("Input changed");
			findItemButChillBruh({
				variables: {
					searchTerm: inputValue,
				},
			});
		},

		// Fire when someone select an item from dropbown box
		onSelectedItemChange({ selectedItem }) {
			router.push({
				pathname: `/product/${selectedItem.id}`,
			});
		},
		itemToString: (item) => item?.name || "",
	});

	return (
		<SearchStyles>
			<div {...getComboboxProps()}>
				<input
					{...getInputProps({
						type: "search",
						placeholder: "Search for an item",
						id: "search",
						className: loading ? "loading" : "",
					})}
				/>
			</div>

			<DropDown {...getMenuProps()}>
				{isOpen &&
					items.map((item, index) => (
						<DropDownItem
							key={item.id}
							{...getItemProps({ item })}
							highlighted={index === highlightedIndex}
						>
							<img
								src={item.photo.image.publicUrlTransformed}
								alt={item.name}
								width="50px"
							/>
							{item.name}
						</DropDownItem>
					))}
				{isOpen && !items.length && !loading && (
					<DropDownItem>Sorry, no item found for {inputValue}</DropDownItem>
				)}
			</DropDown>
		</SearchStyles>
	);
}

export default Search;
