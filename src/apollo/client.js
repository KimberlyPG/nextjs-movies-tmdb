import fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `https://ql-movie-api.herokuapp.com/graphql`, 
  fetch: fetch,

  cache: new InMemoryCache(),
});