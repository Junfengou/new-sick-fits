import { gql, useQuery } from "@apollo/client";

/*
	This is used in the [ <Nav /> ]

    It is very important to remember that the [authenticatedItem] returns a union type, meaning it's capable of returning multiple types
    This is keystone specific: 
        authenticatedItem
*/

export const CURRENT_USER_QUERY = gql`
	query {
		authenticatedItem {
			... on User {
				id
				email
				name
				# Todo: Query the cart once we have it
			}
		}
	}
`;

function useUser() {
	const { data } = useQuery(CURRENT_USER_QUERY);
	return data?.authenticatedItem;
}

export default useUser;
