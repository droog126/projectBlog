import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import App from './App';
import '@/theme/index.less';

globalThis.apiMap = {};

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App>
        <Router />
      </App>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp();
