import React from 'react';
import ReactMarkdown from 'react-markdown';

export default () => {
  return (
    <div>
      <ReactMarkdown>{'# Hello, *world*!'}</ReactMarkdown>
    </div>
  );
};
