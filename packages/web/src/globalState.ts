import { createState, useState } from '@hookstate/core';

const state = createState({
  curType: 'project',
  token: '',
  name: '',
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
    }
  };
};

export const useOutState = () => wrap(state);
export const useComponentState = () => {
  return wrap(useState(state));
};
