import React, { useEffect } from 'react';
import defaultImg from '@/defaultImg';
import styles from './index.less';
import moment from 'moment';
import { useComponentState as useArticleState } from '@/events/article/state';
import { useComponentState as useGlobalState } from '@/globalState';
import { message, Spin } from 'antd';
import { getSearch } from '@/utils/url';
import ReactMarkdown from 'react-markdown';
export default () => {
  const globalHook = useGlobalState();
  const { key = '' } = getSearch();
  if (!key) {
    message.error('没有指定文章');
    globalHook.goTo('/home');
    return <></>;
  }

  const articleHook = useArticleState();
  const { article, loading } = articleHook.get();

  // 获取文章
  useEffect(() => {
    articleHook.getArticle({ key });
    return articleHook.clear();
  }, []);

  const mockData = {
    title: 'Bevy引擎介绍',
    tags: ['游戏引擎', 'bevy'],
    content: `
          是个好日子
        `,
    createTime: Date.now(),
    author: {
      id: 1,
      name: '宁涛',
      header: defaultImg.header,
      rank: 2
    }
  };
  if (loading) {
    return <Spin />;
  }
  return (
    <div className={styles.articleContainer}>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.authorContainer}>
        <img src={mockData.author.header} alt="" />
        <div className={styles.authorName}>{article.author}</div>
        <div className={styles.time}>{moment(article.time).fromNow()} </div>
        <div className={styles.authorName}>发布</div>
      </div>

      <ReactMarkdown className={styles.content}>{article.content}</ReactMarkdown>
    </div>
  );
};
