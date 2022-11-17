import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/app/store';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';
import Layout from './src/components/Layout';
import ReactDOM from 'react-dom'

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


export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}

