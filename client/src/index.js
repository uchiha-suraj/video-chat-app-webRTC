import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { ContextProvider } from './SocketContext';

ReactDOM.render(
  <ContextProvider>
    <App />
    </ContextProvider>,
  document.getElementById('root')
);
