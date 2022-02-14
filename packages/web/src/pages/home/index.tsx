import React, { useEffect } from 'react';
import { useComponentState as useRequestState } from '@/globalState';

export default () => {
  const globalHook = useRequestState();
  const globalState = globalHook.get();
  const { userInfo } = globalState;
  const { firstKey } = userInfo;

  useEffect(() => {
    if (firstKey) {
      if (firstKey.includes('project')) {
        globalHook.set({ curType: 'project' });
        globalHook.goTo('/project', { key: firstKey });
      }
      if (firstKey.includes('article')) {
        globalHook.set({ curType: 'article' });
        globalHook.goTo('/article', { key: firstKey });
      }
      if (firstKey.includes('blog')) {
        globalHook.set({ curType: 'blog' });
        globalHook.goTo('/blog');
      }
    }
  }, []);

  if (!firstKey) {
    return <div>你没有设置首页</div>;
  }
  return <div>重定向到你的首页中...</div>;
};
