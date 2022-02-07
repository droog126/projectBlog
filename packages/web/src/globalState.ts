import { createState, useState } from '@hookstate/core';

const state = createState({
  curType: 'project',
  token: '',
  name: '',
  userInfo: {},
  routePtah: '/'
});

const wrap = (s) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    }
  };
};
export const useOutState = () => wrap(state);
export const useComponentState = () => {
  return wrap(useState(state));
};
