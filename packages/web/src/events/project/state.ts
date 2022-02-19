import { createState, useState } from '@hookstate/core';
import { ProjectCreate, ProjectGet, ProjectListGet, ProjectJobsGet, ProjectDelete } from './index';
import { getSearch, setSearch } from '@/utils/url';
import { useOutState as useJobEditModalState } from '@/components/Modal/JobEditModal/state';
import { useOutState as useJobAddModalState } from '@/components/Modal/JobCreateModal/state';

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

      let data;
      if (userName) {
        data = await ProjectListGet({ userName });
      } else {
        data = await ProjectListGet({ userName: name });
      }
      s.merge({ projectList: data });
      return data;
    },
    async tryCreateProject(data) {
      s.merge({ loading: true });

      const { projectKey } = await ProjectCreate(data);

      // 一开始有jobs 创建完后没有jobs会有bug
      s.merge({ jobs: [] });
      await ProjectGet({ projectKey });
      await this.tryGetProjectList();
      s.merge({ loading: false });
    },

    async tryGetProjectJobs({ projectKey }) {
      s.merge({ jobsIsLoading: true });
      const { jobs } = this.get();
      const jobsIndex = jobs.length;
      const { total, arr = [] } = await ProjectJobsGet({ projectKey, jobsIndex });
      const rowJobs = JSON.parse(JSON.stringify(jobs)) || [];
      const newJobs = [...rowJobs, ...arr];
      s.merge({ jobsIsLoading: false, jobsTotal: total, jobs: newJobs });
    },
    async tryEditProjectJob({ content, jobIndex }) {
      const jobEditModalHook = useJobEditModalState();
      jobEditModalHook.tryEditJob({ content, jobIndex });
    },
    async tryAddProjectJob() {
      const jobAddModalHook = useJobAddModalState();
      jobAddModalHook.tryAddJob();
    },
    async tryDeleteProject({ projectKey = '' }) {
      if (!projectKey) {
        projectKey = s.value.project.key;
      }
      await ProjectDelete({ projectKey });
      const projectList = await this.tryGetProjectList();
      const firstProject = projectList.length ? projectList[0] : null;
      if (firstProject) {
        await this.tryGetProject({ projectKey: firstProject.key });
        await this.tryGetProjectJobs({ projectKey: firstProject.key });
        // 修改路由key
        const lastSearch = getSearch();
        lastSearch.key = firstProject.key;
        setSearch(lastSearch);
      }
    }
  };
};

export const useComponentState = () => wrap(useState(state));
export const useOutState = () => wrap(state);
