// src/App.js
import React, { useEffect } from 'react';
import MarkdownPreviewer from './MarkdownPreviewer';
import './App.scss';

function App() {
  useEffect(() => {
    // Dynamically add the script tag
    const script = document.createElement('script');
    script.src = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <MarkdownPreviewer />
    </div>
  );
}

export default App;