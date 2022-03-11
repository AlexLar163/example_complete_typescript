require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { join } from "path";
import { readFileSync } from "fs";
import resolvers from "./graphql/resolvers/resolvers";

const app = express();

const typeDefs = readFileSync(
  join(__dirname, "graphql", "schema.graphql"),
  "utf-8"
);

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(
  "/api",
  graphqlHTTP({ schema: schema, rootValue: resolvers, graphiql: true })
);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
