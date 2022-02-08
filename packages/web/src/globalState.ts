import { createState, useState } from '@hookstate/core';
import { getSearch, setSearch } from './utils/url';

const state = createState({
  curType: 'project',
  token: '',

  curName: '',
  userInfo: {},
  routePtah: '/account',

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
      const search = setSearch({ ...exeSearch, name: s.value.curName });
      console.log('search', search);
      s.merge({ routePtah: (pathName += location.search) });
    },
    reset() {
      s.merge({
        token: '',
        name: '',
        userInfo: {},
        routePtah: '/account'
      });
    }
  };
};

export const useOutState = () => wrap(state);
export const useComponentState = () => {
  return wrap(useState(state));
};
