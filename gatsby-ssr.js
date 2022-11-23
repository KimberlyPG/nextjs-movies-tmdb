import React from 'react';
import './src/assets/style.css'
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';
import Layout from './src/components/Layout';

export const wrapRootElement = ({ element }) => {
  return (
    <Layout>
      <ApolloProvider client={client}>
        {element}    
      </ApolloProvider>
    </Layout>
  )
};

