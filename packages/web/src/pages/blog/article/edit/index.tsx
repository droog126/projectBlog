import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styles from './index.less';
import { Button, Input, message, Spin } from 'antd';
require('codemirror/mode/markdown/markdown');
import { useComponentState as useArticleState } from '@/events/article/state';
import { useComponentState as useGlobalState } from '@/globalState';
import { getSearch } from '@/utils/url';

export default () => {
  const [content, setContent] = useState('## 使用最方便的博客语法吧');
  const [title, setTitle] = useState('');

  const articleHook = useArticleState();
  const { loading } = articleHook.get();
  const globalHook = useGlobalState();
  const { key } = getSearch();

  const init = async () => {
    const { article } = await articleHook.tryGetArticle({ articleKey: key });
    setTitle(article.title);
    setContent(article.content);
  };
  useEffect(() => {
    if (!key) {
      message.warn('不知道是哪篇文章.');
      globalHook.goTo('/blog');
    } else {
      init();
    }
  }, []);

  if (!key) {
    return null;
  }
  if (loading) {
    return <Spin />;
  }
  return (
    <div className={styles.baseContainer}>
      <div className={styles.title}>
        <Input
          prefix="标题: "
          placeholder="请输入你的标题"
          bordered={false}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className={styles.container}>
        <CodeMirror
          className={styles.left}
          value={content}
          options={{
            mode: 'markdown',
            theme: 'bespin'
          }}
          onBeforeChange={(editor, data, value) => {
            setContent(value);
          }}
          onChange={(editor, data, value) => {}}
        />

        <ReactMarkdown className={styles.right}>{content}</ReactMarkdown>
      </div>

      <div className={styles.bottomBar}>
        <Button
          onClick={async () => {
            if (!title) {
              message.warn('忘记写标题了..');
            } else {
              await articleHook.tryEditArticle({ articleKey: key, new: { title, content } });
              globalHook.goTo(`/blog/article`, { key: key });
            }
          }}>
          更新
        </Button>
      </div>
    </div>
  );
};
