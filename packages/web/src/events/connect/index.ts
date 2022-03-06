import { useOutState as useRequestState } from '@/requestState';
export const ConnectCallback = (data: any, socket: any) => {
  const requestHook = useRequestState();
  requestHook.checkConnection();
  // console.log('连接成功回调', data);
};
