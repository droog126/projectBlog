import { createState, useState } from '@hookstate/core';

const initState = {
  curType: 'project',
  token: '',

  curName: '',
  userInfo: {},
  routePath: '/account',

  lastUrl: ''
};
const state = createState(initState);

const wrap = (s) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    clear() {
      s.set(initState);
    }
  };
};

export const useOutState = () => wrap(state);
export const useComponentState = () => {
  return wrap(useState(state));
};
