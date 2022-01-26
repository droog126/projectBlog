import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import App from './App';
import './index.scss'
const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App>
        <Router>
        </Router>
      </App>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

renderApp();