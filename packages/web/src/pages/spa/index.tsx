import React, { useEffect } from 'react';
import { useComponentState as useGlobalSatte } from '@/globalState';
import { useNavigate } from 'react-router-dom';

export default () => {
  const globalHook = useGlobalSatte();
  const { routePtah } = globalHook.get();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(routePtah);
  }, [routePtah]);

  return <div />;
};
