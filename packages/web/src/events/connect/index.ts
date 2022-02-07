import { useOutState as useRequestState } from '@/requestState';
export const ConnectCallback = (data: any, socket: any) => {
  const globalStateHook = useRequestState();
  globalStateHook.checkConnection();
  console.log('事件触发了', data);
};
