import { createState, useState } from '@hookstate/core';
import { useOutState as useRequestHook } from '@/requestState';
import { ArticleGet, ArticlesGet } from './index';
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
    getArticle({ key }) {
      ArticleGet({ key });
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
    }
  };
};

export const useComponentState = () => wrap(useState(state));
export const useOutState = () => wrap(state);
