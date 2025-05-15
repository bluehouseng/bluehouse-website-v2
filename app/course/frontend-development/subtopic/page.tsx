'use client';
import { useState } from 'react';



const Subtopic = () => {

    return (
      <div  className=' bg-gray-600 '>
        <div className='flex items-center justify-center h-12 bg-gray-800 text-white'>
           <h1 className='text-3xl font-extrabold mx-auto'>BEGIN TO PRACTICE </h1>
        </div>
       
        <div className='grid grid-rows-2 grid-cols-3 gap-6 w-ful h-screen mx-auto px-10 py-8'>

        
        {/* Row 1 */}
        <div className="p-12 rounded-lg bg-orange-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          HTML
        </div>
        <div className="p-12 rounded-lg bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          CSS
        </div>
        <div className="p-12 rounded-lg bg-yellow-400 flex items-center justify-center text-gray-800 text-2xl font-bold shadow-md">
          JAVASCRIPT
        </div>
  
        {/* Row 2 */}
        <div className="p-12 rounded-lg bg-cyan-400 flex items-center justify-center text-gray-800 text-2xl font-bold shadow-md">
          REACT
        </div>
        <div className="p-12 rounded-lg bg-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          PHP
        </div>
        <div className="p-12 rounded-lg bg-gray-800 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          CYBER-SECURITY
        </div>
        </div>
      </div>
    );
  };
  
 
export default Subtopic;