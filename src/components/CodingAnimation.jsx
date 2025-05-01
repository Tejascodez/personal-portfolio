import { useState, useEffect } from "react";

// Custom typing animation for code lines with syntax highlighting
const CodeAnimation = () => {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const codeSnippets = [
    '//Welcome to my portfolio',
    '',
    '// New Here...? ',
    '',
    '"Scroll down to get to know me!😉";',
    '',
    '// Let\'s build something great together!'
  ];

  useEffect(() => {
    if (currentIndex < codeSnippets.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, codeSnippets[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-96 rounded-lg bg-[#0d1117] border border-violet-500/30 shadow-2xl shadow-violet-900/50 overflow-hidden font-mono text-sm">
        {/* Mac-style window header */}
        <div className="flex items-center px-3 py-2 bg-[#161b22] border-b border-violet-500/10">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </div>

        {/* Code block */}
        <div className="p-6 flex flex-col space-y-1 text-left">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              <span className="text-gray-500 mr-4">{index + 1}</span>
              <span className={`
                ${line.includes('function') ? 'text-purple-400' : ''}
                ${line.includes('const') ? 'text-blue-400' : ''}
                ${line.includes('return') ? 'text-pink-400' : ''}
                ${line.includes('//') ? 'text-green-400' : ''}
                ${line.includes('"') ? 'text-yellow-300' : ''}
                ${line.includes(':') && !line.includes('//') ? 'text-cyan-400' : ''}
              `}>
                {line}
              </span>
            </div>
          ))}
          <div className="h-4 w-2 bg-white/70 animate-pulse mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default CodeAnimation;
