import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import profile from '../assets/profile.png';

export default function LanyardSwing() {
  const rotate = useMotionValue(0);
  const smoothRotate = useSpring(rotate, {
    stiffness: 200,
    damping: 15,
  });

  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || !cardRef.current || !isHovered) return;

      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      const distance = e.clientX - centerX;
      rotate.set(distance / 10); // Swing only when hovered
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rotate, isHovered]);

  return (
    <div
      ref={containerRef}
      className={`flex justify-center items-start h-full ${
        isDarkMode ? 'dark:bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="h-20 w-1 bg-white mb-1" /> {/* lanyard string */}
        <motion.div
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            rotate.set(0); // reset when mouse leaves
          }}
          style={{ rotate: smoothRotate }}
          className="w-60 h-56 bg-white rounded-xl flex justify-center items-center shadow-xl origin-top"
        >
          <img src={profile} alt="logo" className="w-50 h-50 object-contain" />
        </motion.div>
      </div>
    </div>
  );
}
