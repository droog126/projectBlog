import { createState, useState } from '@hookstate/core';
import { encode, decode } from '@msgpack/msgpack';
import Login from '@/events/user/login';
import GetProduct from '@/events/user/get/prouduct';

const route: any = {
  user: {
    login: {
      func: Login
    },
    get: {
      product: {
        func: GetProduct
      }
    }
  }
};
const eventHanlder = (data: any, socket: any) => {
  const { path } = data;
  try {
    const paths = path.split('/').slice(1);
    let target = route;
    let len = paths.length;
    let i;

    // console.log("入", target, paths, i);

    for (i = 0; i < len; i++) {
      let cur = paths[i];
      target = target[cur];
    }

    // console.log("出", target, paths, i);

    if (i == len) {
      target.func(data, socket);
    }
  } catch (e) {
    console.log('没找到路由', e);
  }
};

const state = createState({ connection: false });

const wrap = (s) => {
  return {
    get() {
      return s.value;
    },
    checkConnection(connection = true) {
      s.merge({ connection: connection });
    },
    async connect({ ip = 'localhost', port = '9001' }: any) {
      const socket = new WebSocket(`ws://${ip}:${port}`);

      socket.onopen = () => {
        const newData = { path: '/user/login', meth: 'give', token: 'tao' };
        var buff = encode(newData);
        socket.send(buff);
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        eventHanlder(decode(data.data), socket);
      };
      globalThis.socket = socket;
    },
    give({ path = '/', data = {} }) {
      const { connection } = s.value;
      if (connection) {
        const newData = { path, meth: 'give', token: 'tao' };
        var buff = encode(newData);
        globalThis.socket.send(buff);
      } else {
        console.log('还未连接!!', s.value);
      }
    }
  };
};
export const useOutState = () => wrap(state);
export default () => {
  return wrap(useState(state));
};
