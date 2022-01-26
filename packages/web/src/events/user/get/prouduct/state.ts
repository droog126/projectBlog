import { createState, useState } from '@hookstate/core';
import { useOutState as useRequestHook } from '@/globalState';
const state = createState({ pedding: false, value: {} });

const wrap = (s: any) => {
  return {
    get() {
      return s.value;
    },
    refersh() {}
  };
};

export const useComponentHook = () => wrap(useState(state));
export const useOutHook = () => wrap(state);
