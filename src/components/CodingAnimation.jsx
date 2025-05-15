import { useState, useEffect } from "react";

// Custom typing animation for code lines with syntax highlighting
const CodeAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto p-4 bg-gray-900 dark:bg-gray-950 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
      <div className="flex items-center justify-start gap-1.5 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 text-gray-400 text-xs font-mono">tejas_portfolio.js</span>
      </div>
      
      <pre className="text-xs sm:text-sm font-mono text-left overflow-x-auto pb-2">
        <code>
          <span className="text-blue-400">const</span> <span className="text-green-400">developer</span> <span className="text-white">=</span> <span className="text-orange-400">{'{'}</span>
          {'\n  '}<span className="text-purple-400">name</span><span className="text-white">:</span> <span className="text-green-300">'Tejas Patil'</span><span className="text-white">,</span>
          {'\n  '}<span className="text-purple-400">role</span><span className="text-white">:</span> <span className="text-green-300">'Full Stack Developer'</span><span className="text-white">,</span>
          {'\n  '}<span className="text-purple-400">passions</span><span className="text-white">:</span> <span className="text-orange-400">[</span>
          {'\n    '}<span className="text-green-300">'Web Development'</span><span className="text-white">,</span>
          {'\n    '}<span className="text-green-300">'Problem Solving'</span><span className="text-white">,</span>
          {'\n    '}<span className="text-green-300">'Clean Code'</span>
          {'\n  '}<span className="text-orange-400">]</span><span className="text-white">,</span>
          {'\n  '}<span className="text-purple-400">skills</span><span className="text-white">:</span> <span className="text-orange-400">[</span>
          {'\n    '}<span className="text-green-300">'React'</span><span className="text-white">,</span> <span className="text-green-300">'Node.js'</span><span className="text-white">,</span> <span className="text-green-300">'TypeScript'</span><span className="text-white">,</span>
          {'\n    '}<span className="text-green-300">'Next.js'</span><span className="text-white">,</span> <span className="text-green-300">'Tailwind CSS'</span>
          {'\n  '}<span className="text-orange-400">]</span>
          {'\n'}<span className="text-orange-400">{'}'}</span><span className="text-white">;</span>
          {'\n\n'}<span className="text-blue-400">function</span> <span className="text-yellow-300">connect</span><span className="text-white">()</span> <span className="text-orange-400">{'{'}</span>
          {'\n  '}<span className="text-blue-400">return</span> <span className="text-green-300">'Let\'s build something amazing!'</span><span className="text-white">;</span>
          {'\n'}<span className="text-orange-400">{'}'}</span>
        </code>
      </pre>
      
      {/* Animated cursor */}
      <div className="absolute bottom-6 right-8 w-2 h-4 bg-white opacity-75 animate-pulse"></div>
    </div>
  );
};


export default CodeAnimation;
