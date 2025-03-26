import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  variant?: 'organ' | 'body';
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  id, 
  className, 
  children,
  variant = 'organ'
}) => {
  const bgGradient = variant === 'organ' 
    ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900'
    : 'bg-gradient-to-br from-orange-50 to-red-100 dark:from-red-950 dark:to-red-900';

  return (
    <motion.section
      id={id}
      className={cn(
        "min-h-screen w-full py-16 px-4 md:px-8 flex flex-col items-center justify-center",
        bgGradient,
        className
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, margin: "-20%" }}
    >
      <div className="max-w-4xl w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default ScrollSection;
