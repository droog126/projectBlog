import React, { useEffect } from 'react';
import { useComponentState as useGlobalSatte } from '@/globalState';
import { useNavigate } from 'react-router-dom';
import { setSearch, getSearch } from '@/utils/url';
export default () => {
  const globalHook = useGlobalSatte();
  const state = globalHook.get();
  const { routePtah, curName } = state;
  const navigate = useNavigate();
  useEffect(() => {
    navigate(routePtah);

    const originalSeach = getSearch();
    setSearch({ ...originalSeach, name: curName });
  }, [routePtah]);

  // 观测全局数据
  if (process.env.DEV) {
    useEffect(() => {
      console.log('globalState', state);
    }, [state]);
  }
  return <div />;
};
