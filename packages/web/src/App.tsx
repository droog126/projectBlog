import moment from 'moment';
import React, { useEffect } from 'react';
import useGlobalHook from './requestState';

moment.locale('zh-cn');
export default ({ children }) => {
  const globalHook = useGlobalHook();
  const { connection } = globalHook.get();

  useEffect(() => {
    if (!connection) {
      globalHook.connect({});
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
