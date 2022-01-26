import globalState, { useOutState } from '@/globalState';
export default (data: any, socket: any) => {
  console.log('事件触发了', data);
};
