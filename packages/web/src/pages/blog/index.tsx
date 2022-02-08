import React, { useEffect } from 'react';
import styles from './index.less';
import moment from 'moment';
import { useComponentState as useGlobalState } from '@/globalState';
import { getSearch } from '@/utils/url';
import { Spin } from 'antd';
import { useComponentState as useArticleState } from '@/events/article/state';
import { setSearch } from '@/utils/url';
export default () => {
  const globalHook = useGlobalState();
  const { name } = getSearch();
  if (!name) {
    console.log('没有指定用户');
    globalHook.goTo('/home');
  }

  const articleHook = useArticleState();
  const state = articleHook.get();
  const { loading, articles } = state;
  useEffect(() => {
    articleHook.getArticles({ user: name });
    return articleHook.clear();
  }, []);

  if (process.env.DEV) {
    useEffect(() => {
      console.log('articleState', state);
    }, [state]);
  }

  if (loading) {
    return <Spin />;
  }
  return (
    <div className={styles.baseContainer}>
      <div className={styles.contentContainer}>
        {articles.map((item) => {
          return (
            <div className={styles.article}>
              <div className={styles.circle} />
              <div
                className={styles.title}
                onClick={() => {
                  globalHook.set({ curType: 'article' });
                  globalHook.goTo('/blog/article', { key: item.key });
                }}>
                {item.title}
              </div>
              <div className={styles.pos} />
              <div className={styles.time}>{moment(item.time).fromNow()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
