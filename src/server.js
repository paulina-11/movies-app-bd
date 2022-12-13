// config global de GraphQl
import { GraphQLServer } from "graphql-yoga";
import resolvers from './graphql/resolvers';
import path from "path";
import { connect } from "./database";

connect();

export const server = new GraphQLServer({
  typeDefs: path.join(__dirname, "graphql/schema.graphql"),
  resolvers,
});