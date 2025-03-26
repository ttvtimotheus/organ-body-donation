import React, { ReactNode, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  variant?: 'organ' | 'body' | 'neutral';
  onVisible?: (id: string) => void;
}

/**
 * ScrollSection component that wraps content in a styled section
 * Supports tracking visibility for navigation highlighting
 */
const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  id, 
  className, 
  children,
  variant = 'organ',
  onVisible
}) => {
  // Enhanced gradient backgrounds with more depth and visual interest
  let bgGradient;
  
  if (variant === 'organ') {
    bgGradient = 'bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950';
  } else if (variant === 'body') {
    bgGradient = 'bg-gradient-to-br from-orange-50 via-amber-50 to-red-100 dark:from-red-950 dark:via-orange-900 dark:to-red-950';
  } else {
    bgGradient = 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-gray-950 dark:via-purple-950 dark:to-gray-900';
  }

  // Decorative elements based on the variant
  let decorationElement;
  
  if (variant === 'organ') {
    decorationElement = (
      <div className="absolute top-10 right-10 w-64 h-64 opacity-10 dark:opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0066FF" d="M45.7,-77.2C58.9,-69.2,69.3,-56.3,76.8,-42.1C84.3,-27.9,88.9,-13.9,88.4,-0.3C87.9,13.4,82.3,26.8,74.7,39.2C67.1,51.7,57.5,63.2,45.1,70.8C32.7,78.4,16.4,82.2,0.2,81.9C-16,81.6,-31.9,77.2,-45.4,69.2C-58.9,61.2,-70,49.6,-77.4,35.8C-84.9,22,-88.7,6,-87.1,-9.4C-85.5,-24.8,-78.5,-39.7,-68,-51.7C-57.4,-63.8,-43.3,-73.1,-29,-78.3C-14.7,-83.6,-0.3,-84.8,13.7,-82.1C27.7,-79.3,32.5,-85.3,45.7,-77.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    );
  } else if (variant === 'body') {
    decorationElement = (
      <div className="absolute bottom-10 left-10 w-64 h-64 opacity-10 dark:opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF6B6B" d="M41.3,-69.8C53.4,-63.5,63.2,-52.3,70.9,-39.5C78.6,-26.6,84.1,-12.1,83.9,2.3C83.7,16.7,77.8,31.1,69.1,43.6C60.4,56.1,48.8,66.6,35.4,72.8C22,79,8.9,80.9,-4.4,78.8C-17.7,76.7,-31.2,70.5,-42.8,62C-54.4,53.4,-64.1,42.5,-70.8,29.6C-77.5,16.7,-81.2,1.8,-79.2,-12.4C-77.2,-26.5,-69.5,-39.9,-58.9,-49.7C-48.3,-59.5,-34.9,-65.7,-21.9,-69.9C-8.9,-74.1,4.6,-76.3,17.3,-75C30,-73.7,29.2,-76.1,41.3,-69.8Z" transform="translate(100 100)" />
        </svg>
      </div>
    );
  } else {
    decorationElement = (
      <div className="absolute top-10 left-10 w-64 h-64 opacity-10 dark:opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#9333EA" d="M47.7,-73.2C62.9,-66.2,77.1,-55.8,83.9,-41.8C90.8,-27.8,90.2,-10.2,86.8,6.3C83.4,22.8,77.2,38.3,67.1,50.8C57,63.3,43.1,72.8,28.1,77.7C13.1,82.5,-3,82.7,-18.1,78.7C-33.2,74.7,-47.4,66.5,-58.9,55.1C-70.5,43.7,-79.3,29.1,-83.1,13.1C-86.9,-2.9,-85.7,-20.4,-78.8,-35C-71.8,-49.6,-59.1,-61.4,-45,-68.9C-30.9,-76.4,-15.5,-79.7,0.2,-80C15.8,-80.3,32.5,-80.3,47.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    );
  }

  // Reference to the section element for intersection observer
  const sectionRef = useRef<HTMLElement>(null);

  // Set up intersection observer to detect when section is visible
  useEffect(() => {
    if (!onVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Call onVisible callback when section becomes visible
        if (entry.isIntersecting) {
          onVisible(id);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      const currentSectionRef = sectionRef.current;
      observer.observe(currentSectionRef);
    }

    // Clean up observer on component unmount
    return () => {
      if (sectionRef.current) {
        const currentSectionRef = sectionRef.current;
        observer.unobserve(currentSectionRef);
      }
    };
  }, [onVisible, id]);

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className={cn(
        "min-h-screen w-full py-16 px-4 md:px-8 flex flex-col items-center justify-center relative overflow-hidden",
        bgGradient,
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Decorative background elements */}
      {decorationElement}
      
      {/* Content container with glass effect */}
      <motion.div 
        className="max-w-4xl w-full relative z-10 backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-800/30"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
      
      {/* Subtle bottom decoration */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 ${
        variant === 'organ' 
          ? 'bg-gradient-to-r from-transparent via-blue-400 dark:via-blue-600 to-transparent' 
          : variant === 'body'
          ? 'bg-gradient-to-r from-transparent via-red-400 dark:via-red-600 to-transparent'
          : 'bg-gradient-to-r from-transparent via-purple-400 dark:via-purple-600 to-transparent'
      }`}></div>
    </motion.section>
  );
};

export default ScrollSection;
