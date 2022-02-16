import { useOutState as useRequestState } from '@/requestState';
import { useOutState as useGlobalState } from '@/globalState';
import { useOutState as useCreateModalState } from '@/components/Modal/ProjectCreateModal/state';
import { useOutState as useProjectState } from './state';

export const ProjectCreate = async (data): Promise<any> => {
  const path = '/project/create';
  const requestHook = useRequestState();
  return requestHook.give({ path: '/project/create', data });
};

export const ProjectCreateCallback = ({ data }) => {
  console.log('项目创建成功的回调', data);
  const { projectKey } = data;
  const globalHook = useGlobalState();
  const projectHook = useProjectState();

  const modalState = useCreateModalState();
  modalState.set({ visible: false });
  globalHook.goTo(`/project`, { key: projectKey });

  return data;
};

export const ProjectGet = async ({ projectKey }) => {
  const path = '/project/get';
  const data = { projectKey };
  const requestHook = useRequestState();
  return requestHook.give({ path, data });
};

export const ProjectGetCallback = ({ data }) => {
  // console.log('项目获取成功', data);
  const { project } = data;
  const projectHook = useProjectState();
  projectHook.set({ project, loading: false });

  return data;
};

export const ProjectListGet = async ({ userName }) => {
  const path = '/project/list/get';
  const data = { userName };
  const requestHook = useRequestState();
  return requestHook.give({ path, data });
};

export const ProjectListGetCallback = ({ data }) => {
  // console.log('项目列表获取', data);
  const projectHook = useProjectState();
  projectHook.set({ projectList: data });

  return data;
};

// job start
export const ProjectJobAdd = async (data) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/project/job/add', data });
};

export const ProjectJobAddCallback = ({ data }) => {
  // console.log('项目任务添加成功', data);
  return data;
};

export const ProjectJobsGet = async (data) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/project/job/get', data });
};

export const ProjectJobsGetCallback = ({ data }) => {
  // console.log('获取项目记录', data);
  return data;
};

export const ProjectJobEdit = async (data) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/project/job/edit', data });
};

export const ProjectJobEditCallback = ({ data }) => {
  // console.log('项目记录编辑', data);
  return data;
};

//job end
