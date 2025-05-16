'use client'

import { useState } from 'react';
import Editor from '@monaco-editor/react';

const Css = () => {
  const [cssCode, setCssCode] = useState(
`/* Add your CSS here */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.button {
  background: #3498db;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

.button:hover {
  background: #2980b9;
}`
  );

  const htmlTemplate = `<!DOCTYPE html>
<html>
<head>
  <title>CSS Preview</title>
  <style id="custom-css">
    ${cssCode}
  </style>
</head>
<body>
  <div class="container">
    <h1>CSS Editor</h1>
    <p>Edit the CSS on the left to style this content</p>
    <button class="button">Hover Me</button>
  </div>
</body>
</html>`;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side - CSS Examples (50%) */}
      <div className="w-1/2 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">CSS Examples</h2>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Basic Selectors</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`/* Element selector */
p {
  color: blue;
}

/* Class selector */
.container {
  margin: 0 auto;
}

/* ID selector */
#header {
  font-size: 2rem;
}

/* Multiple elements */
h1, h2, h3 {
  font-family: 'Helvetica';
}`}
          </pre>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Box Model</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`div {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
  background-color: #f9f9f9;
}`}
          </pre>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">Flexbox</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.flex-item {
  flex: 1;
  min-width: 100px;
}`}
          </pre>
        </div>
      </div>

      {/* Right Side - Editor and Preview (50%) */}
      <div className="w-1/2 h-screen flex flex-col border-l border-gray-200">
        {/* Editor (70% of right side) */}
        <div className="h-[60%] flex flex-col mb-2">
          <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
            <span className="font-mono text-sm">styles.css</span>
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              language="css"
              theme="vs-light"
              value={cssCode}
              onChange={setCssCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on',
                automaticLayout: true
              }}
            />
          </div>
        </div>

        {/* Preview (30% of right side) */}
        <div className="h-[30%] border-t mt-20 border-gray-200 flex flex-col">
          <div className="bg-gray-800 text-white p-2">
            <span className="font-mono text-sm">Live Preview</span>
          </div>
          <div className="flex-1 overflow-auto">
            <iframe
              srcDoc={htmlTemplate}
              title="CSS Preview"
              className="w-full h-full border-none"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Css;