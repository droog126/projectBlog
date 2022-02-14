import { createState, useState } from '@hookstate/core';
import { ProjectAddJob } from '@/events/project';
import { getSearch } from '@/utils/url';

const state = createState({ visible: false });

const wrap = (s: any) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    addJob(data) {
      const { key } = getSearch();
      ProjectAddJob({ ...data, key });
    }
  };
};

export const useComponentState = () => wrap(useState(state));
export const useOutState = () => wrap(state);
