"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

const Html = () => {
  const [activeTab, setActiveTab] = useState("html");
  const [code, setCode] = useState({
    html: `<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to HTML Editor</h1>
  <p>Edit this code to see changes</p>
  <div id="root"></div>
  <script src="script.js"></script>
</body>
</html>`,
    css: `body {
  font-family: Arial, sans-serif;
  padding: 20px;
  line-height: 1.6;
}

h1 {
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

p {
  color: #34495e;
}`,
    javascript: `// Simple JavaScript example
document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('h1');
  heading.addEventListener('click', () => {
    heading.style.color = heading.style.color === 'red' ? '#2c3e50' : 'red';
  });

  console.log('JavaScript loaded!');
});`,
    react: `import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: '20px' }}>
      <h2>React Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));`,
  });

  const examples = {
    html: [
      {
        title: "Basic Structure",
        code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>My Heading</h1>
  <p>My paragraph.</p>
</body>
</html>`,
      },
      {
        title: "Common Elements",
        code: `<!-- Links -->
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
</form>`,
      },
    ],
    css: [
      {
        title: "Basic Selectors",
        code: `/* Element selector */
p {
  color: blue;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  font-size: 24px;
}`,
      },
      {
        title: "Box Model",
        code: `div {
  width: 300px;
  padding: 20px;
  border: 5px solid gray;
  margin: 10px;
  background-color: lightblue;
}`,
      },
    ],
    javascript: [
      {
        title: "Variables and Functions",
        code: `// Variables
let message = "Hello";
const PI = 3.14;

// Function
function greet(name) {
  return message + " " + name;
}

console.log(greet("World"));`,
      },
      {
        title: "DOM Manipulation",
        code: `// Get element
const btn = document.getElementById('myBtn');

// Add event listener
btn.addEventListener('click', function() {
  alert('Button clicked!');
});

// Create element
const newDiv = document.createElement('div');
newDiv.textContent = 'New element';
document.body.appendChild(newDiv);`,
      },
    ],
    react: [
      {
        title: "Component Basics",
        code: `function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="World" />`,
      },
      {
        title: "State and Events",
        code: `function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}`,
      },
    ],
  };

  const languageConfig = {
    html: { language: "html", iframe: true },
    css: { language: "css", iframe: false },
    javascript: { language: "javascript", iframe: false },
    react: { language: "javascript", iframe: false },
  };

  const handleCodeChange = (value: any) => {
    setCode((prev) => ({ ...prev, [activeTab]: value }));
  };

  const getPreviewContent = () => {
    if (activeTab === "html") return code.html;
    if (activeTab === "css") return `<style>${code.css}</style>`;
    if (activeTab === "javascript")
      return `<script>${code.javascript}</script>`;
    if (activeTab === "react")
      return `<script type="text/babel">${code.react}</script>`;
    return "";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side - Examples (50%) */}
      <div className="w-1/2 p-6 overflow-auto">
        <div className="flex space-x-2 mb-6">
          {["html", "css", "javascript", "react"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-t-lg ${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">
          {activeTab.toUpperCase()} Examples
        </h2>

        {
          // @ts-ignore
          examples[activeTab].map((example, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {example.code}
              </pre>
            </div>
          ))
        }
      </div>

      {/* Right Side - Editor (50%) */}
      <div className="w-1/2 flex flex-col border-l border-gray-200">
        {/* Editor (70% of right side) */}
        <div className="h-[70%] flex flex-col">
          <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
            <span className="font-mono text-sm">editor.{activeTab}</span>
          </div>
          <div className="flex-1">
            <Editor
              height="100%"
              // @ts-ignore
              language={languageConfig[activeTab].language}
              theme="vs-light"
              // @ts-ignore
              value={code[activeTab]}
              onChange={handleCodeChange}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: "on",
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
            {
              //@ts-ignore
              languageConfig[activeTab].iframe ? (
                <iframe
                  srcDoc={getPreviewContent()}
                  title={`${activeTab} Preview`}
                  className="w-full h-full border border-gray-200 rounded"
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="bg-gray-100 p-4 rounded h-full overflow-auto">
                  <pre className="text-sm">{getPreviewContent()}</pre>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Html;
