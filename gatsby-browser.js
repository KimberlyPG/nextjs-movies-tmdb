import React from 'react';

import Layout from './src/components/Layout';

import './src/assets/style.css'
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';

export const wrapRootElement = ({ element }) => {
  return (
    <Layout>
      <ApolloProvider client={client}>
        {element}    
      </ApolloProvider>
    </Layout>
  )
};

