'use client'
import { useState } from 'react';
import Editor from '@monaco-editor/react';

const Html = () => {
  const [htmlCode, setHtmlCode] = useState(
`<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    h1 {
      color: #2c3e50;
    }
  </style>
</head>
<body>
  <h1>Welcome to HTML Editor</h1>
  <p>Edit this code to see changes</p>
</body>
</html>`
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side - Example (50%) */}
      <div className="w-1/2 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">HTML Example</h2>
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2">Basic Structure</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My Heading</h1>
  <p>My paragraph.</p>
</body>
</html>`}
          </pre>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Common Elements</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<!-- Links -->
<a href="https://example.com">Visit Example</a>

<!-- Images -->
<img src="image.jpg" alt="Description">

<!-- Lists -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Forms -->
<form>
  <input type="text" placeholder="Name">
  <button type="submit">Submit</button>
</form>`}
          </pre>
        </div>
      </div>

      {/* Right Side - Editor (50%) */}
      <div className="w-1/2 flex flex-col border-l border-gray-200">
        {/* Editor (70% of right side) */}
        <div className="h-[70%] flex flex-col">
          <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
            <span className="font-mono text-sm">editor.html</span>
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              language="html"
              theme="vs-light"
              value={htmlCode}
              onChange={setHtmlCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: 'on'
              }}
            />
          </div>
        </div>

        {/* Implementation Preview (30% of right side) */}
        <div className="h-[30%] border-t border-gray-200 flex flex-col">
          <div className="bg-gray-800 text-white p-2">
            <span className="font-mono text-sm">Preview</span>
          </div>
          <div className="flex-1 overflow-auto p-4 bg-white">
            <iframe
              srcDoc={htmlCode}
              title="HTML Preview"
              className="w-full h-full border border-gray-200 rounded"
              sandbox="allow-scripts"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html;