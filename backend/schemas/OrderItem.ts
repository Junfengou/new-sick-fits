import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, select, text  } from '@keystone-next/fields';
import { isSignedIn, rules } from '../access';

export const OrderItem = list({
    // TODO
    access: {
      create: isSignedIn,
      read: rules.canManageOrderItem,
      update: () => false,
      delete: () => false,
    },
    fields: {
      name: text({ isRequired: true }),
      description: text({
        ui: {
          displayMode: 'textarea',
        },
      }),
      // 2 way relationship with ProductImage: video 17
      photo: relationship({
        ref: 'ProductImage',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText'] },
          inlineEdit: { fields: ['image', 'altText'] },
        }
      }),
     
      price: integer(),

      quantity: integer(),
      order: relationship({ ref: 'Order.items'})
    },
  });