import { useOutState } from '@/requestState';
export const ArticleCreateCallback = () => {};
export const ArticleCreate = (data) => {
  const requestHook = useOutState();
  requestHook.give({ path: '/article/create', data });
};
