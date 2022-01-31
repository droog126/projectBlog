import React from 'react';
import defaultImg from '@/defaultImg';
import styles from './index.less';
import moment from 'moment';

export default () => {
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
  return (
    <div className={styles.articleContainer}>
      <div className={styles.title}>{mockData.title}</div>
      <div className={styles.authorContainer}>
        <img src={mockData.author.header} alt="" />
        <div className={styles.authorName}>{mockData.author.name}</div>
        <div className={styles.time}>{moment(mockData.createTime).fromNow()} </div>
        <div className={styles.authorName}>发布</div>
      </div>
      <div className={styles.content}>{mockData.content}</div>
    </div>
  );
};
