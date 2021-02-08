import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, select, text  } from '@keystone-next/fields';
import { isSignedIn, permissions, rules } from '../access';

 const CartItem = list({
    // TODO
    // custom label
    access: {
      create: isSignedIn,
      read: rules.canOrder,
      update: rules.canOrder,
      delete: rules.canOrder
    },
    ui: {
        listView: {
            initialColumns: ['product', 'quantity', 'user']
        }
    },
    fields: {
        quantity: integer({
            defaultValue: 1,
            isRequired: true,
          }),

      product: relationship({ ref: 'Product'}),
      user: relationship({ ref: 'User.cart'}),
    },
  });

export {CartItem};