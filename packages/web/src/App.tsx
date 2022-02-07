import React, { useEffect } from 'react';
import { useComponentState as useRequestState } from './requestState';

export default ({ children }) => {
  const requestHook = useRequestState();
  const { connection } = requestHook.get();

  useEffect(() => {
    if (!connection) {
      requestHook.connect({});
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
