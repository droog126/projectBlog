import React from 'react';
import styles from './index.less';
import defaultImg from '@/defaultImg';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useComponentState as useGlobalState } from '@/globalState';

export default () => {
  const navigate = useNavigate();
  const globalHook = useGlobalState();
  const mockData = {
    page: 1,
    pageSize: 20,
    total: 60,
    articles: [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ]
  };
  const { articles } = mockData;
  return (
    <div className={styles.baseContainer}>
      <div className={styles.contentContainer}>
        {articles.map((item) => {
          return (
            <div className={styles.article}>
              <div className={styles.circle}></div>
              <div
                className={styles.title}
                onClick={() => {
                  globalHook.set({ curType: 'article' });
                  navigate('/blog/article');
                }}>
                {item.title}
              </div>
              <div className={styles.pos}></div>
              <div className={styles.time}>{moment(item.createTime).fromNow()}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
