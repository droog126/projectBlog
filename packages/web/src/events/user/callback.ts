import { useOutState as useGlobalState } from '@/globalState';

export const UserLoginCallback = ({ data }, socket) => {
  const { name, token } = data;
  localStorage.setItem('token', token);
  const globalHook = useGlobalState();
  globalHook.set({ token, userInfo: data, curName: data.name });

  const redirectUrl = globalHook.get().lastUrl || '/home';
  globalHook.goTo(redirectUrl);
};

export const UserCreateCallback = ({ data }) => {
  // console.log('收到了信息了', data);
  const { name, token } = data;
  localStorage.setItem('token', token);
  const globalHook = useGlobalState();
  globalHook.set({ token, userInfo: data, curName: data.name });

  const redirectUrl = globalHook.get().lastUrl || '/home';
  globalHook.goTo(redirectUrl);
};

export const UserAutoLoginCallback = ({ data }) => {
  console.log('登入成功后的回调', data);
  const { token } = data;
  const globalHook = useGlobalState();
  globalHook.set({ token, userInfo: data, curName: data.name });

  const redirectUrl = globalHook.get().lastUrl || '/home';
  globalHook.goTo(redirectUrl);
};
