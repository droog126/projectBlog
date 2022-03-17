import { createState, useState } from '@hookstate/core';
import { encode, decode } from '@msgpack/msgpack';
import hexToArrayBuffer from 'hex-to-array-buffer';
import { ConnectCallback } from '@/events/connect';
import {
  ArticleCreateCallback,
  ArticleDeleteCallback,
  ArticleEditCallback,
  ArticleGetCallback,
  ArticlesGetCallback
} from '@/events/article';
import { UserLoginCallback, UserCreateCallback, UserAutoLoginCallback, UserSetFirstCallback } from '@/events/user/callback';
import {
  ProjectJobAddCallback,
  ProjectCreateCallback,
  ProjectGetCallback,
  ProjectListGetCallback,
  ProjectJobsGetCallback,
  ProjectJobEditCallback,
  ProjectDeleteCallback
} from '@/events/project';
import { message } from 'antd';

const route: any = {
  connect: {
    func: ConnectCallback
  },
  user: {
    login: {
      func: UserLoginCallback
    },
    create: {
      func: UserCreateCallback
    },
    autoLogin: {
      func: UserAutoLoginCallback
    },
    setFirst: {
      func: UserSetFirstCallback
    }
  },
  project: {
    create: {
      func: ProjectCreateCallback
    },
    get: {
      func: ProjectGetCallback
    },
    delete: {
      func: ProjectDeleteCallback
    },
    list: {
      get: {
        func: ProjectListGetCallback
      }
    },
    job: {
      add: {
        func: ProjectJobAddCallback
      },
      get: {
        func: ProjectJobsGetCallback
      },
      edit: {
        func: ProjectJobEditCallback
      }
    }
  },
  article: {
    create: {
      func: ArticleCreateCallback
    },
    get: {
      func: ArticleGetCallback
    },
    delete: {
      func: ArticleDeleteCallback
    },
    edit: {
      func: ArticleEditCallback
    }
  },
  articles: {
    get: {
      func: ArticlesGetCallback
    }
  }
};

const eventHandler = (data: any, socket: any) => {
  const { path } = data;
  try {
    const paths = path.split('/').slice(1);
    let target = route;
    let len = paths.length;
    let i;

    // console.log('入', target, paths, i);

    for (i = 0; i < len; i++) {
      let cur = paths[i];
      target = target[cur];
    }

    // console.log('出', target, paths, i);

    if (i == len) {
      const res = target.func(data, socket);
      if (globalThis.apiMap[path]) {
        // console.log(path, '回调了', res, globalThis.apiMap);
        globalThis.apiMap[path].forEach((rsv) => {
          rsv(res);
        });
        delete globalThis.apiMap[path];
      }
    }
  } catch (e) {
    console.log('没找到路由', e, data);
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
    handleCallback({ code = 0, msg }) {
      if (!code) {
        if (msg) {
          message.success(msg);
        }
        return 1;
      } else {
        if (code == 1) {
          msg && message.warning(msg);
        } else {
          msg && message.error(msg);
        }
        return 0;
      }
    },
    async connect({ ip = 'localhost', port = '9001' }: any) {
      const socket = new WebSocket(`ws://${ip}:${port}`);

      socket.onopen = () => {
        const newData = { path: '/connect' };
        var buff = encode(newData);
        socket.send(buff);
      };

      socket.onmessage = (event) => {
        const buffer = hexToArrayBuffer(event.data.slice(2));
        const obj = decode(buffer);
        // console.log(event.data, buffer, obj);

        if (this.handleCallback(obj)) {
          eventHandler(obj, socket);
        }
      };
      globalThis.socket = socket;
    },
    async give({ path = '/', data = {}, token = '' }): Promise<any> {
      const { connection } = s.value;
      if (connection) {
        const token = localStorage.getItem('token') || '';
        const newData = { path, token, data };
        var buff = encode(newData);
        globalThis.socket.send(buff);

        return new Promise((rsv, rjc) => {
          if (globalThis.apiMap[path]) {
            globalThis.apiMap[path].push((data) => {
              rsv(data);
            });
          } else {
            console.log('warning:有重复请求', path);
            globalThis.apiMap[path] = [
              (data) => {
                rsv(data);
              }
            ];
          }
        });
      } else {
        message.warn('还未连接后端服务..');
      }
    }
  };
};
export const useOutState = () => wrap(state);

export const useComponentState = () => {
  return wrap(useState(state));
};
