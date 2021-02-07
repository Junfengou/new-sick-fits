import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, select, text  } from '@keystone-next/fields';

 const CartItem = list({
    // TODO
    // custom label
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