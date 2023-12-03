import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={prismStyle} children={code} />
  );
};

const prismStyle = {
  background: '#f8f8f8',
  padding: '20px',
  borderRadius: '5px',
};

export default CodeBlock;

