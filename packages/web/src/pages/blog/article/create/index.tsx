import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styles from './index.less';
import { Button, Input, message } from 'antd';
require('codemirror/mode/markdown/markdown');

import { ArticleCreate } from '@/events/article';
export default () => {
  const [content, setContent] = useState('## 使用最方便的博客语法吧');
  const [title, setTitle] = useState('');
  return (
    <div className={styles.baseContainer}>
      <div className={styles.title}>
        <Input
          prefix="标题: "
          placeholder="请输入你的标题"
          bordered={false}
          defaultValue={title}
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
          onClick={() => {
            if (!title) {
              message.warn('忘记写标题了..');
            } else {
              ArticleCreate({ title, content });
            }
          }}>
          发布
        </Button>
      </div>
    </div>
  );
};
