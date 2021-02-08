import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';
// At it's simplest, the access control returns a yes or no value depending on the users session

export function isSignedIn({ session }: ListAccessArgs) {
  return !!session;
}

// ignore this error

/*
    The purpose of this method is to take in all the existing permissions from [permissionsList] array and
    turn them into an object with the value being a function that checks whether
    a user have the permission
*/
const generatedPermissions = Object.fromEntries(
  permissionsList.map((permission) => [
    permission,
    function ({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission];
    },
  ])
);

console.log("permissionsList :", permissionsList)
console.log("generatedPermissions: ", generatedPermissions)

// permission check
export const permissions = {
  ...generatedPermissions,
  /*    //Add in addition permission
  isAwesome({ session }: ListAccessArgs): boolean {
    return session?.data.name.includes('wes');
  },
  */
};


// Rule based functions - return a boolean or a set of filter to limit the items they can CRUD

export const rules = {

    canManageProducts({ session }: ListAccessArgs) {
      if(!isSignedIn({ session })) {
        return false;
      }

        // 1. Do they have the permission of canManagePRoducts
        if (permissions.canManageProducts({ session })) {
            return true;
          }

        // 2. If not, do they own this item
        return { user: { id: session.itemId } };
    },

// ---------------------------------> 
    // Users that are not admin can only see the item that is "AVAILABLE"
    canReadProduct({ session } : ListAccessArgs ) {
      if(!isSignedIn({ session })) {
        return false;
      }

        if(permissions.canManageProducts({session}))
        {
            return true
        }
         // They can only see the available products (based on the status field)
         return { status: 'AVAILABLE'};
    },

// ---------------------------------> 
    canOrder({ session }: ListAccessArgs) {

      // Fail-safe for if the user is not signed in and try to query products
      if(!isSignedIn({ session })) {
        return false;
      }

      // 1. Do they have the permission of canManageProducts
      if (permissions.canManageCart({ session })) {
          return true;
        }

      // 2. If not, do they own this item
      return { user: { id: session.itemId } };
  },

// ---------------------------------> 
  canManageOrderItem({ session }: ListAccessArgs) {
    if(!isSignedIn({ session })) {
      return false;
    }

    // 1. Do they have the permission of canManagePRoducts
    if (permissions.canManageCart({ session })) {
        return true;
      }

    // What's happening here?
      // query the order => user => user id | to see whatever order item is related to that user
    return { order: { user: { id: session.itemId } } };
},

// ---------------------------------> 
// The purpose of this rule is to make sure that a new user that is signed up cannot add themselves as admin 
  canManageUsers({ session }: ListAccessArgs) {
    if (!isSignedIn({ session })) {
      return false;
    }
    if (permissions.canManageUsers({ session })) {
      return true;
    }
    // Otherwise they may only update themselves!
    return {id: session.itemId };
  },

}