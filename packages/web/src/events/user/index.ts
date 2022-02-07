import { useOutState as useRequestState } from '@/requestState';

export const UserLogin = (data) => {
  // name psw
  const requestHook = useRequestState();
  requestHook.give({ path: '/user/login', data });
};

export const UserCreate = (data) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/user/create', data });
};

export const UserAutoLogin = (token) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/user/autoLogin', token });
};
