import React from 'react';
import defaultImg from '@/defaultImg';

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
  return <div>hello</div>;
};
