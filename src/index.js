import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRoutes } from './routes/AppRoutes';

import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.render(
  <ChakraProvider>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);