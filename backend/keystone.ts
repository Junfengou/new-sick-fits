import { config, createSchema } from '@keystone-next/keystone/schema';
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import 'dotenv/config';
import { insertSeedData } from './seed-data';

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
    User, Product, ProductImage
  }),

  ui: {
    // Show the UI only for people who pass the test
    isAccessAllowed: ({ session }) => {
      // console.log(session);
      return !!session?.data;
    },
  },
  // TODO: Add session values here

  // Session is for when someone log in and give them a set of cookie until they log out | cookie expire
  session: withItemData(statelessSessions(sessionConfig), {
    // Graphql query
    User: `id name email`
  })
}));