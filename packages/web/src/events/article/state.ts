import { createState, useState } from '@hookstate/core';
import { useOutState as useGlobalState } from '@/globalState';
import { ArticleDelete, ArticleEdit, ArticleGet, ArticlesGet } from './index';
import article from '@/components/Header/article';
const state = createState({ loading: true, articles: [], page: 1, pageSize: 20, article: {} });

const wrap = (s: any) => {
  return {
    get() {
      return s.value;
    },
    set(data) {
      s.merge(data);
    },
    clear() {
      s.merge({ loading: true, articles: [], page: 1, pageSize: 20, article: {} });
    },
    getArticle({ articleKey }) {
      ArticleGet({ articleKey });
    },
    getArticles(params) {
      s.merge({ loading: true });
      ArticlesGet(params);
    },
    pushArticles(articles) {
      s.merge({
        articles,
        loading: false
      });
    },
    pushArticle(article) {
      s.merge({
        article,
        loading: false
      });
    },
    async tryDeleteArticle({ articleKey = '' }) {
      if (!articleKey) {
        articleKey = s.value.article.key;
      }
      await ArticleDelete({ articleKey });

      const globalHook = useGlobalState();
      globalHook.goTo('/blog');
    },
    async tryEditArticle({ articleKey = '', new: { content, title } }) {
      if (!articleKey) {
        console.log('error', articleKey);
      }
      await ArticleEdit({ articleKey, new: { title, content } });
    },
    async tryGetArticle({ articleKey }) {
      s.merge({ loading: true });
      const data = await ArticleGet({ articleKey: articleKey });
      s.merge({ loading: false });
      return data;
    }
  };
};

export const useComponentState = () => wrap(useState(state));
export const useOutState = () => wrap(state);
