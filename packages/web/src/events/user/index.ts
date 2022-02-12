import { useOutState as useRequestState } from '@/requestState';
import { useOutState as useGlobalState } from '@/globalState';
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

export const UserLogout = () => {
  const globalHook = useGlobalState();
  globalHook.reset();
  localStorage.removeItem('token');
};

export const UserSetFirst = ({ key }) => {
  const requestHook = useRequestState();
  // console.log('setFirst', key);
  requestHook.give({ path: '/user/setFirst', data: { key } });
};
