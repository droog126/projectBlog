import React, { useEffect } from 'react';
import { useComponentState as useRequestState } from './requestState';

import { useComponentState as useGlobalState } from '@/globalState';
export default ({ children }) => {
  const requestHook = useRequestState();
  const globalHook = useGlobalState();
  const { connection } = requestHook.get();

  useEffect(() => {
    if (!connection) {
      if (process.env.DEV) {
        requestHook.connect({});
      } else {
        requestHook.connect({ ip: '172.22.120.120' });
      }
    }

    // 重定向到登入前的url
    console.log('设置上一次路由', location);
    globalHook.set({ lastUrl: location.pathname + location.search });
  }, []);

  useEffect(() => {
    console.log('连接状态变了', connection);
  }, [connection]);

  if (!connection) {
    return <div>connections...</div>;
  }

  return <div>{children}</div>;
};
