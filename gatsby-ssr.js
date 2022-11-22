import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/app/store';
import './src/assets/style.css'
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';
import Layout from './src/components/Layout';

export const wrapRootElement = ({ element }) => {
  return (
    // <Provider store={store}>
    <Layout>
      <ApolloProvider client={client}>
        {element}    
      </ApolloProvider>
    </Layout>
  )
};

