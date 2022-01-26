import globalState, { useOutState } from '@/globalState';
export default (data: any, socket: any) => {
  const globalStateHook = useOutState();
  globalStateHook.checkConnection();
  console.log('事件触发了', data);
};
