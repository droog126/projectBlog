import React, { useEffect } from 'react';
import { useComponentState as useGlobalState } from '@/globalState';
import { useNavigate } from 'react-router-dom';
export default () => {
  const globalHook = useGlobalState();
  const state = globalHook.get();
  const { routePath, curName } = state;

  // spa路由跳转
  const navigate = useNavigate();
  useEffect(() => {
    console.log('routePath', routePath);
    navigate(routePath);
  }, [routePath]);

  // 观测全局数据
  if (process.env.DEV) {
    useEffect(() => {
      console.log('globalState', state);
    }, [state]);
  }
  return <div />;
};
