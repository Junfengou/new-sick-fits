import { list } from '@keystone-next/keystone/schema';
import { relationship, text  } from '@keystone-next/fields';
import formatMoney from '../lib/formatMoney';
import { permissionFields } from './fields';
import { permissions } from '../access';

export const Role = list({

    // The purpose of this access field is to dictate who has the access to the "Role" ui 
    access: {
        create: permissions.canManageRoles,
        read: permissions.canManageRoles,
        update: permissions.canManageRoles,
        delete: permissions.canManageRoles,
    },
    ui: {
        hideCreate: args => !permissions.canManageRoles(args),
        hideDelete: args => !permissions.canManageRoles(args),
        isHidden: args => !permissions.canManageRoles(args),
    },
    fields: {
        name: text({ isRequired: true}),
        ...permissionFields,
        assignedTo: relationship({
            ref: 'User.role',
            many: true,
            ui: {
                itemView: { fieldMode: 'read' }
            }
        })
    },
  });
