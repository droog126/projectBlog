import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import App from './App';
// import "antd/dist/antd.variable.less";
import '@/theme/index.less';
import moment from 'moment';
import { message } from 'antd';
moment.locale('zh-cn');

message.config({
  maxCount: 2
});

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
