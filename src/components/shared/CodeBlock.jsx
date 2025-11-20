import React from 'react';
import CopyButton from './CopyButton';

export default function CodeBlock({ children, copyText }) {
  // Extract text from children if copyText not provided
  const textToCopy = copyText || (typeof children === 'string' ? children : '');

  return (
    <div className="code-block-wrapper">
      <CopyButton text={textToCopy} />
      <pre>{children}</pre>
    </div>
  );
}
