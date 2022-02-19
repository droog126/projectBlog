import { createState, useState } from '@hookstate/core';
import { ProjectJobEdit } from '@/events/project';
import { getSearch } from '@/utils/url';
import Modal from './index';
import { addModal, removeModal } from '@/utils/modal';
import { useOutState as useProjectState } from '@/events/project/state';

const initState = { visible: false, content: '', jobIndex: 0, projectKey: '' };
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
      removeModal('editJob');
    },
    tryEditJob({ content, jobIndex }) {
      const { key } = getSearch();
      s.merge({ visible: true, jobIndex, content, projectKey: key });
      addModal(Modal, 'editJob');
    },
    async ok(data) {
      const { jobIndex, projectKey } = s.value;
      const { total, jobs } = await ProjectJobEdit({ jobIndex, projectKey, ...data });
      console.log('new', jobs);
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
