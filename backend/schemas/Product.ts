import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, select, text  } from '@keystone-next/fields';
import { isSignedIn, rules } from '../access';

export const Product = list({
    // TODO
    access: {
      create: isSignedIn,
      read: rules.canReadProduct,
      update: rules.canManageProducts,
      delete: rules.canManageProducts,
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
        ref: 'ProductImage.product',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText'] },
          inlineEdit: { fields: ['image', 'altText'] },
        }
      }),
      status: select({
        options: [
          { label: 'Draft', value: 'DRAFT' },
          { label: 'Available', value: 'AVAILABLE' },
          { label: 'Unavailable', value: 'UNAVAILABLE' },
        ],
        defaultValue: 'DRAFT',
        ui: {
          displayMode: 'segmented-control',
        //   createView: { fieldMode: 'hidden' },
        },
      }),

      price: integer(),
      // set up a relationship where it connects to the User schema and pump in the currently signed in user
      user: relationship({ ref: 'User.products', defaultValue: ({context}) => ({ connect: {id: context.session.itemId }})})
      
    },
  });