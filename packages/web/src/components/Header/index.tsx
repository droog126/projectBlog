import React, { useEffect, useMemo, useRef } from 'react';
import styles from './index.less';
import DefaultImg from '@/defaultImg';
import { Dropdown, Menu, Select, Space } from 'antd';
import { Back, Level, Switch } from '@icon-park/react';
import { useNavigate } from 'react-router-dom';
import { useComponentState as useGlobalState } from '@/globalState';
import { UserLogout } from '@/events/user';
const { Option } = Select;
import ProjectHeader from './project';
import BlogHeader from './blog';
import ArticleHeader from './article';

export default () => {
  const globalHook = useGlobalState();
  const { curType } = globalHook.get();

  useEffect(() => {
    switch (location.pathname) {
      case '/blog':
        globalHook.set({ curType: 'blog' });
        break;
      case '/project':
        globalHook.set({ curType: 'project' });
        break;
      case '/blog/article':
        globalHook.set({ curType: 'article' });
        break;
    }
  }, []);

  switch (curType) {
    case 'blog':
      return <BlogHeader />;
      break;
    case 'project':
      return <ProjectHeader />;
      break;
    case 'article':
      return <ArticleHeader />;
      break;
  }
};
