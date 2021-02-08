// import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { permissions, rules } from '../access';
import { Role } from './Role';


export const User = list({
    access: {
        create: () => true,
        read: rules.canManageUsers,
        update: rules.canManageUsers, // Either the checkBox or Admin granted
        delete: permissions.canManageUsers, // This is activated only by the checkBox (You can't delete yourself)
      },
      ui: {
        // hide the backend UI from regular users
        hideCreate: (args) => !permissions.canManageUsers(args),
        hideDelete: (args) => !permissions.canManageUsers(args),
      },
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password(),
        cart: relationship({ 
            ref: 'CartItem.user',
            // user can have multiple items in the cart
            many: true,
            ui: {
                createView: { fieldMode: 'hidden'},
                itemView: { fieldMode: 'read'},
            }
        }),
        orders: relationship({ ref: 'Order.user', many: true }),
        role: relationship({ 
            ref: 'Role.assignedTo',
            // Limit the access of creating a new role when the user is not an admin
            access: {
                create: permissions.canManageUsers,
                update: permissions.canManageUsers,
            }
         }),
        products: relationship({ ref: 'Product.user', many: true, })
        
    }
})