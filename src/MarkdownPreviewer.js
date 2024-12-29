// src/MarkdownPreviewer.js
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewer.scss';

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to my Markdown Previewer!

## This is a subheading

[Visit my GitHub](https://github.com)

Inline code: \`const x = 10;\`

\`\`\`
function helloWorld() {
  console.log("Hello, world!");
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

![Image](https://via.placeholder.com/150)

**This text is bold.**`);

  useEffect(() => {
    // Set the default markdown in the preview
    setMarkdown(markdown);
  }, [markdown]);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-previewer">
    <textarea
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    />
    <div id="preview">
      {/* Render markdown preview here */}
    </div>
  </div>
);
}

export default MarkdownPreviewer;