/*
    This file is a custom graphql Mutation that deals with updating the cart when a new item or new quantity is updated

    typeDef: name of the mutation, args it takes, etc...

    resolvers: run the request
*/

import { graphQLSchemaExtension } from "@keystone-next/keystone/schema";
import addToCart from "./addToCart";

const graphql = String.raw;
export const extendGraphqlSchema = graphQLSchemaExtension({
    typeDefs: graphql`
        type Mutation {
            addToCart(productId: ID) : CartItem
        }
    `,
    resolvers: {
        Mutation: {
            addToCart
        }
    }
})

