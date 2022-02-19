import { useOutState as useRequestState } from '@/requestState';
import { useOutState as useGlobalState } from '@/globalState';
import { useOutState as useArticleState } from './state';

export const ArticleCreate = async (data) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/article/create', data });
};
export const ArticleCreateCallback = ({ data }) => {
  const { articleKey } = data;
  const globalHook = useGlobalState();
  globalHook.goTo(`/blog/article`, { key: articleKey });
};

export const ArticleGet = async ({ articleKey }) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/article/get', data: { articleKey } });
};

export const ArticleGetCallback = ({ data }) => {
  console.log('文章获取返回', data);
  const { article } = data;
  const articleHook = useArticleState();
  articleHook.pushArticle(article);
  return data;
};

export const ArticlesGet = async ({ user }) => {
  const requestHook = useRequestState();
  return requestHook.give({ path: '/articles/get', data: { user } });
};

export const ArticlesGetCallback = ({ data }) => {
  console.log('articles', data);
  const { articles } = data;
  const articleHook = useArticleState();
  articleHook.pushArticles(articles);
};

export const ArticleDelete = async ({ articleKey }) => {
  const path = '/article/delete';
  const data = { articleKey };
  const requestHook = useRequestState();
  return requestHook.give({ path, data });
};

export const ArticleDeleteCallback = ({ data }) => {
  console.log('/article/delete', data);
  return data;
};

export const ArticleEdit = async ({ articleKey, new: { title, content } }) => {
  const path = '/article/edit';
  const data = { articleKey, new: { title, content } };
  const requestHook = useRequestState();
  return requestHook.give({ path, data });
};

export const ArticleEditCallback = ({ data }) => {
  console.log('/article/edit', data);
  return data;
};
