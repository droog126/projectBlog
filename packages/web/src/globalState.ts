import { createState, useState } from '@hookstate/core';

const state = createState({
  curType: 'project',
  token: '',

  curName: '',
  userInfo: {},
  routePtah: '/account'
});

const wrap = (s) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    goTo(pathName) {
      s.merge({ routePtah: pathName });
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
