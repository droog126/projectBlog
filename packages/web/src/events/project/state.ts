import { createState, useState } from '@hookstate/core';
import { useOutState as useRequestHook } from '@/requestState';
import { ProjectCreate, ProjectGet, ProjectListGet, ProjectJobsGet } from './index';
import { getSearch } from '@/utils/url';
const state = createState({ loading: true, projects: [], project: {}, projectList: [], jobs: [], jobsIsLoading: true, jobTotal: 0 });

const wrap = (s: any) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    clear() {
      s.merge({ loading: true, projects: [], project: {}, jobs: [] });
    },
    tryGetProject({ projectKey = '' }) {
      s.merge({ loading: true });
      ProjectGet({ projectKey });
    },
    async tryGetProjectList({ userName } = { userName: '' }) {
      const { name } = getSearch();
      if (userName) {
        return ProjectListGet({ userName });
      } else {
        return ProjectListGet({ userName: name });
      }
    },
    async tryCreateProject(data) {
      s.merge({ loading: true });

      const { projectKey } = await ProjectCreate(data);
      let res = await ProjectGet({ projectKey });
      res = await this.tryGetProjectList();
      s.merge({ loading: false });
    },

    async tryGetProjectJobs({ projectKey }) {
      s.merge({ jobsIsLoading: true });
      const { jobs } = this.get();
      const jobsIndex = jobs.length;
      const { total, arr } = await ProjectJobsGet({ projectKey, jobsIndex });
      // const newJobs = [...jobs, ...arr];
      // console.log('bug了', newJobs);
      s.merge({ jobsIsLoading: false, jobsTotal: total, jobs: arr });
    }
  };
};

export const useComponentState = () => wrap(useState(state));
export const useOutState = () => wrap(state);
