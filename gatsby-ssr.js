// export { wrapRootElement } from './src/apollo/provider';

import React from 'react';
import { Provider } from 'react-redux';
import store from './src/app/store';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/apollo/client';

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
        <ApolloProvider client={client}>
        {element}    
    </ApolloProvider>
      </Provider>
  )
};

