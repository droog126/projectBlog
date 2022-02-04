import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Controlled as CodeMirror } from 'react-codemirror2';
import styles from './index.less';
require('codemirror/mode/markdown/markdown');

export default () => {
  const [content, setContent] = useState('## Here is some JavaScript code');
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CodeMirror
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
      </div>

      <div className={styles.right}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};
