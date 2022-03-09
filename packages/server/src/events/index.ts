import { send } from '@/utils';

export const Connect = (data: any, socket: any) => {
  const { path } = data;

  send(socket, { path });
  console.log('确认连接成功。。');
};
