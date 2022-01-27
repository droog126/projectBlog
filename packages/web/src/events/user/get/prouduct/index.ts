import globalState, { useOutState } from '@/requestState';
export default (data: any, socket: any) => {
  console.log('事件触发了', data);
};
