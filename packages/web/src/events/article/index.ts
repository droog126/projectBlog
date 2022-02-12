import { useOutState as useRequestState } from '@/requestState';
import { useOutState as useGlobalState } from '@/globalState';
import { useOutState as useArticleState } from './state';

export const ArticleCreate = (data) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/article/create', data });
};
export const ArticleCreateCallback = ({ data }) => {
  const { articleKey } = data;
  const globalHook = useGlobalState();
  globalHook.goTo(`/blog/article`, { key: articleKey });
};

export const ArticleGet = ({ key }) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/article/get', data: { key } });
};

export const ArticleGetCallback = ({ data }) => {
  console.log('文章获取返回', data);
  const { article } = data;
  const articleHook = useArticleState();
  articleHook.pushArticle(article);
};

export const ArticlesGet = ({ user }) => {
  const requestHook = useRequestState();
  requestHook.give({ path: '/articles/get', data: { user } });
};

export const ArticlesGetCallback = ({ data }) => {
  console.log('articles', data);
  const { articles } = data;
  const articleHook = useArticleState();
  articleHook.pushArticles(articles);
};
