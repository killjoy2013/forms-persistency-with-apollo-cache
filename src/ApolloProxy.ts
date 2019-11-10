import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { CarFormQuery } from "./graphql/types";
import { resolvers } from "./resolvers";

export const getClient = () => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    resolvers
  });

  cache.writeData<CarFormQuery>({
    data: {
      carForm: {
        __typename: "Car",
        brand: "",
        model: "",
        year: null,
        fastEnough: false
      }
    }
  });

  return client;
};