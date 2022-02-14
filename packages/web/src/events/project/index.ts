import { useOutState as useRequestState } from '@/requestState';
import { useOutState as useGlobalState } from '@/globalState';
import { useOutState as useCreateModalState } from '@/components/Modal/ProjectCreateModal/state';
import { useOutState as useProjectState } from './state';
import project from '@/components/Header/project';

export const ProjectCreate = (data) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/project/create', data });
};

export const ProjectCreateCallback = ({ data }) => {
  console.log('项目创建成功的回调', data);
  const { projectKey } = data;
  const globalHook = useGlobalState();
  const projectHook = useProjectState();

  const modalState = useCreateModalState();
  modalState.set({ visible: false });
  globalHook.goTo(`/project`, { key: projectKey });
};

export const ProjectGet = ({ key }) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/project/get', data: { key } });
};

export const ProjectGetCallback = ({ data }) => {
  console.log('项目获取成功', data);
  const { project } = data;
  const projectHook = useProjectState();
  projectHook.set({ project, loading: false });
};

export const ProjectListGet = ({ key }) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/project/list/get', data: { key } });
};

export const ProjectListGetCallback = ({ data }) => {
  // console.log('项目列表获取', data);
  const projectHook = useProjectState();
  projectHook.set({ projectList: data });
};

export const ProjectAddJob = (data) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/project/job/add', data });
};

export const ProjectAddJobCallback = ({ data }) => {
  // console.log('项目列表获取', data);
  const projectHook = useProjectState();
  projectHook.set({ projectList: data });
};
