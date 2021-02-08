import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import 'dotenv/config';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { CartItem } from "./schemas/CartItem";
import { OrderItem } from "./schemas/OrderItem";
import { Order } from "./schemas/Order";
import { Role } from "./schemas/Role";
import { extendGraphqlSchema } from './mutations';
import { permissionsList } from './schemas/fields';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  // schema
  listKey: "User",
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // Todo: Add in initial roles here
  },
  /*
    Password reset need to be set up here
    The args will return 3 things: ItemId, identity, and token
    identity is the email recieved back
    token is the reset password token
    video #40 and #42
  */
  passwordResetLink: {
    async sendToken(args) {
      await sendPasswordResetEmail(args.token, args.identity)
    }
  }
})


export default withAuth (
  config({
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },

  db: {
    adapter: 'mongoose',
    url: databaseURL,
    // TODO: Add data seeding here
    async onConnect(keystone) {
      console.log('Connected to the database!');
      if (process.argv.includes('--seed-data')) {
        await insertSeedData(keystone);
      }
    },
  },

  lists: createSchema({
    // Schema items go in here
    User, Product, ProductImage, CartItem, OrderItem, Order, Role
  }),

  // Custom mutation goes here
  extendGraphqlSchema,

  ui: {
    // Show the UI only for people who pass the test
    isAccessAllowed: ({ session }) => {
      // console.log("session: ", session);
      return !!session?.data;
    },
  },
  // TODO: Add session values here

  // Session is for when someone log in and give them a set of cookie until they log out | cookie expire
  session: withItemData(statelessSessions(sessionConfig), {
    // Graphql query

    /* On every single session, we query these items
      files like [addToCard.ts] mutation get access to this
    */
    User: `
      id 
      name 
      email 
      role {
        ${permissionsList.join(" ")}
      }`
  })
}));