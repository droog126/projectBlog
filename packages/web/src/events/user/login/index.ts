import globalState, { useOutState } from '@/requestState';
export default (data: any, socket: any) => {
  const globalStateHook = useOutState();
  globalStateHook.checkConnection();
  console.log('事件触发了', data);
};
