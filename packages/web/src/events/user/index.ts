import { useOutState as useRequestState } from '@/requestState';
import { useOutState as useGlobalState } from '@/globalState';
export const UserLogin = async (data) => {
  // name psw
  const requestHook = useRequestState();
  return requestHook.give({ path: '/user/login', data });
};

export const UserCreate = async (data) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/user/create', data });
};

export const UserAutoLogin = async (token) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/user/autoLogin', token });
};

export const UserLogout = () => {
  const globalHook = useGlobalState();
  globalHook.reset();
  localStorage.removeItem('token');
};

export const UserSetFirst = async ({ key }) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/user/setFirst', data: { key } });
};
