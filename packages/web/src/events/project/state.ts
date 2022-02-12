import { createState, useState } from '@hookstate/core';
import { useOutState as useRequestHook } from '@/requestState';
import { ProjectCreate, ProjectGet, ProjectListGet } from './index';
const state = createState({ loading: true, projects: [], project: {}, projectList: [] });

const wrap = (s: any) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    clear() {
      s.merge({ loading: true, projects: [], project: {} });
    },
    getProject({ key = '' }) {
      s.merge({ loading: true });
      ProjectGet({ key });
    },
    getProjectList({ key }) {
      ProjectListGet({ key });
    },
    createProject(data) {
      ProjectCreate(data);
    }
  };
};

export const useComponentState = () => wrap(useState(state));
export const useOutState = () => wrap(state);
