// src/MarkdownPreviewer.js
import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewer.scss';

// Configure marked to use line breaks
marked.setOptions({
  breaks: true
});

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
    // This ensures the initial markdown is set
    // No additional action needed
  }, []);

  const handleChange = (event) => {
    // Update markdown when textarea content changes
    setMarkdown(event.target.value);
  };

  return (
    <div className="markdown-previewer">
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
        rows="10"
        cols="50"
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      />
    </div>
  );
};

export default MarkdownPreviewer;