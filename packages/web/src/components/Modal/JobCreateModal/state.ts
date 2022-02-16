import { createState, useState } from '@hookstate/core';
import { ProjectJobAdd, ProjectJobEdit } from '@/events/project';
import { getSearch } from '@/utils/url';
import Modal from './index';
import { addModal, removeModal } from '@/utils/modal';
import { useOutState as useProjectState } from '@/events/project/state';

const initState = { visible: false, projectKey: '' };
const state = createState({ ...initState });

const wrap = (s: any) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    clear() {
      s.merge(initState);
      removeModal('createJob');
    },
    async tryAddJob() {
      const { key } = getSearch();
      s.merge({ visible: true, projectKey: key });
      addModal(Modal, 'createJob');
    },
    async ok(data) {
      const { projectKey } = s.value;

      const { total, jobs } = await ProjectJobAdd({ projectKey, ...data });

      const projectHook = useProjectState();
      projectHook.set({ jobsIsLoading: false, jobsTotal: total, jobs });

      this.clear();
    },
    cancel() {
      this.clear();
    }
  };
};

export const useComponentState = () => wrap(useState(state));
export const useOutState = () => wrap(state);
