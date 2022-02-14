import { createState, useState } from '@hookstate/core';
import path from 'path/posix';
import { getSearch, setSearch } from './utils/url';

const state = createState({
  curType: 'project',
  token: '',

  curName: '',
  userInfo: {},
  routePath: '/account',

  lastUrl: ''
});

const wrap = (s) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    goTo(pathName, exeSearch = {}) {
      // console.log('goto', pathName, exeSearch, getSearch(pathName));
      // 因为pathName 在重定向到上一次路由会带有参数 所以有问题
      const lastSearch = getSearch(pathName);
      const search = setSearch({ ...lastSearch, ...exeSearch, name: s.value.curName });
      s.merge({ routePath: (pathName.split('?')[0] += search) });
    },
    reset() {
      s.merge({
        token: '',
        name: '',
        userInfo: {},
        routePath: '/account'
      });
    }
  };
};

export const useOutState = () => wrap(state);
export const useComponentState = () => {
  return wrap(useState(state));
};

export const tryPromise = () => {};
