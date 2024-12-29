// src/App.js
import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <MarkdownPreviewer />
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
}

export default App;