/*
    The whole purpose of this file is to solve the ordering issue with pagination when user delete an item

    Each page displays 4 items. When an item gets deleted, it is ideal to push the next item on the next page to the previous page
        to fill in the spot. Since initially all items in apollo cache are categorized in different sections by pagination, 
        we need a way to combine all of them in a single list in order to filter out the items we need. 

    This is from video : #35
    Example: 
        1 2 3 4 | 5 6 7 8 | 9 10 11 12
            This is the initial item list, each number represent a single item. Each line represent a page 
        1 2 3 4 | 5 6 7 9 | 10 11 12 
            When item [#8] gets deleted, we need to move item [#9] up a page to maintain the consistency of 4 items per page

    SIDE NOTE: This file is called inside the [WithData.js] under the (InMemoryCache) section 

*/

import React from "react";
import { PAGINATION_QUERY } from "../components/Pagination";

function paginationField() {
	return {
		keyArgs: false, // Tells Apollo that I will take care everything

		// skip: skip however many items
		// first: give me the first however many items

		// args: The skip value that's passed in    cache: Apollo cache
		read(existing = [], { args, cache }) {
			// console.log({ existing, args, cache });
			const { skip, first } = args;

			//Read the number of items on the page from the cache
			const data = cache.readQuery({ query: PAGINATION_QUERY });
			const count = data?._allProductsMeta?.count;

			// what page we're currently on
			const page = skip / first + 1;
			const pages = Math.ceil(count / first);

			// Check if we have existing items, start at skip value and go until you hit (skip + 4)
			const items = existing.slice(skip, skip + first).filter((item) => item);

			//If there are items && if there are enough items to satisfy how many are requested && we are on the last page
			if (items.length && items.length !== first && page === pages) {
				return items;
			}

			if (items.length !== first) {
				// We don't have any items, we must go to the network to fetch them
				return false;
			}

			// If there are items, just return the items from the cache
			if (items.length) {
				/*
                console.log(
					`There are ${items.length} items in the cache! Gonna send them to apollo`
				);
                */
				return items;
			}

			return false; // fallback to network

			// When Apollo tries to query for all Products, it will first ask the read function for those items

			// Either do 1 of 2 things:

			// 1. Return the items because they are already in the cache

			// OR

			// 2. Return false from here [create a network request]
		},
		merge(existing, incoming, { args }) {
			const { skip, first } = args;
			// This runs when the Apollo client comes back from the Keystone with the products
			// console.log(`Merging items from the network ${incoming.length}`);
			// If there are existing items in the cache already, we want to take a copy of all the items
			const merged = existing ? existing.slice(0) : [];
			for (let i = skip; i < skip + incoming.length; ++i) {
				merged[i] = incoming[i - skip];
			}
			console.log(merged);
			return merged;
		},
	};
}

export default paginationField;
