"use client";

import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const Javascript = () => {
  const [jsCode, setJsCode] = useState(
    `// Welcome to JavaScript Editor!
// Try these examples or write your own code

// Basic Output
console.log('Hello, World!');

// Variables
const name = 'Alice';
let age = 25;
console.log(\`\${name} is \${age} years old\`);

// Functions
function greet(person) {
  return \`Hello, \${person}!\`;
}
console.log(greet('Bob'));

// Arrays
const fruits = ['apple', 'banana', 'orange'];
console.log('Fruits:', fruits);

// Objects
const user = {
  name: 'Charlie',
  email: 'charlie@example.com',
  isAdmin: false
};
console.log('User:', user);`,
  );

  const [consoleOutput, setConsoleOutput] = useState([]);

  // Execute code and capture console output
  const executeCode = () => {
    try {
      // Clear previous output
      setConsoleOutput([]);

      // Override console.log to capture output
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        // @ts-ignore
        setConsoleOutput((prev) => [...prev, args.join(" ")]);
        originalConsoleLog(...args);
      };

      // Execute the code
      new Function(jsCode)();

      // Restore original console.log
      console.log = originalConsoleLog;
    } catch (error) {
      // @ts-ignore
      setConsoleOutput((prev) => [...prev, `Error: ${error.message}`]);
    }
  };

  // Auto-run code when it changes
  useEffect(() => {
    executeCode();
  }, [jsCode]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Side - JavaScript Examples (40%) */}
      <div className="w-2/5 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          JavaScript Examples
        </h2>

        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Variables & Data Types
          </h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {`// Number
const age = 30;

// String
const name = 'Alice';

// Boolean
const isActive = true;

// Array
const colors = ['red', 'green', 'blue'];

// Object
const person = {
  name: 'Bob',
  age: 25
};`}
          </pre>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            Functions
          </h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {`// Function declaration
function add(a, b) {
  return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Callback function
[1, 2, 3].forEach(num => {
  console.log(num * 2);
});`}
          </pre>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">
            DOM Manipulation
          </h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
            {`// Select element
const btn = document.querySelector('#myButton');

// Add event listener
btn.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Create element
const div = document.createElement('div');
div.textContent = 'New element';
document.body.appendChild(div);`}
          </pre>
        </div>
      </div>

      {/* Right Side - Editor and Console (60%) */}
      <div className="w-3/5 flex flex-col border-l border-gray-200">
        {/* Editor (60% of right side) */}
        <div className="h-[60%] flex flex-col">
          <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
            <span className="font-mono text-sm">script.js</span>
            <button
              onClick={executeCode}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs"
            >
              Run Code
            </button>
          </div>
          <div className="flex-1">
            {/* <Editor
              height="100%"
              language="javascript"
              theme="vs-light"
              value={jsCode}
              onChange={setJsCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                wordWrap: "on",
                automaticLayout: true,
              }}
            /> */}
            <Editor
  height="100%"
  language="javascript"
  theme="vs-light"
  value={jsCode}
  onChange={(value) => setJsCode(value || "")}
  options={{
    minimap: { enabled: false },
    fontSize: 14,
    wordWrap: "on",
    automaticLayout: true,
  }}
/>
          </div>
        </div>

        {/* Console Output (40% of right side) */}
        <div className="h-[40%] border-t border-gray-200 flex flex-col">
          <div className="bg-gray-800 text-white p-2">
            <span className="font-mono text-sm">Console Output</span>
          </div>
          <div className="flex-1 overflow-auto bg-black text-green-400 p-4 font-mono text-sm">
            {consoleOutput.length > 0 ? (
              consoleOutput.map((line, index) => (
                <div key={index} className="mb-1">
                  {line}
                </div>
              ))
            ) : (
              <div className="text-gray-500">// Output will appear here...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Javascript;
