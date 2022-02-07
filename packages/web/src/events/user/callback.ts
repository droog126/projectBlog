import React from 'react';
import { useOutState as useGlobalState } from '@/globalState';
import { useLocation } from 'react-router-dom';

export const UserLoginCallback = ({ data }, socket) => {
  // console.log('登入成功后的回调', data);
  const { name, token } = data;
  const globalHook = useGlobalState();
  globalHook.set({ name, token });
};

export const UserCreateCallback = ({ data }) => {
  // console.log('收到了信息了', data);
  const { name, token } = data;
  localStorage.setItem('token', token);
  const globalHook = useGlobalState();
  globalHook.set({ name, token });
};

export const UserAutoLoginCallback = ({ data }) => {
  console.log('登入成功后的回调', data);
  const { name, token } = data;
  const globalHook = useGlobalState();
  globalHook.set({ name, token });
  globalHook.goTo('/home');
};
