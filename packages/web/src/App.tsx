import React, { useEffect } from 'react';
import { useComponentState as useRequestState } from './requestState';

import { useComponentState as useGlobalState } from '@/globalState';
export default ({ children }) => {
  const requestHook = useRequestState();
  const globalHook = useGlobalState();
  const { connection } = requestHook.get();

  useEffect(() => {
    if (!connection) {
      requestHook.connect({});
    }

    // 重定向到登入前的url
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
