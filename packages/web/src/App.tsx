import React, { useEffect } from 'react';
import { useComponentState as useRequestState } from './requestState';

import { useComponentState as useGlobalState } from '@/globalState';

import moment from 'moment';
import { message } from 'antd';
moment.locale('zh-cn');
message.config({
  maxCount: 2
});

export default ({ children }) => {
  const requestHook = useRequestState();
  const globalHook = useGlobalState();
  const { connection } = requestHook.get();

  useEffect(() => {
    // 重定向到登入前的url
    console.log('设置上一次路由', location);
    globalHook.set({ lastUrl: location.pathname + location.search });

    if (!connection) {
      if (process.env.DEV === 'true') {
        requestHook.connect({});
        console.log('dev', process.env.DEV);
        return;
      }
      console.log('prod');
      requestHook.connect({ ip: '118.178.191.183' });
    }
  }, []);

  useEffect(() => {
    console.log('连接状态变了', connection);
  }, [connection]);

  if (!connection) {
    return <div>connections...</div>;
  }

  return <div>{children}</div>;
};
