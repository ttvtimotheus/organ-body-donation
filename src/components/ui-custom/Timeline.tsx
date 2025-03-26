import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  description, 
  icon, 
  isLast = false 
}) => {
  return (
    <motion.div 
      className="flex gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center z-10",
          "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
        )}>
          {icon || <span className="text-lg font-bold">•</span>}
        </div>
        {!isLast && (
          <div className="w-0.5 grow bg-blue-200 dark:bg-blue-800 my-2"></div>
        )}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

interface TimelineProps {
  items: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
  variant?: 'blue' | 'red';
}

const Timeline: React.FC<TimelineProps> = ({ 
  items, 
  className,
  variant = 'blue'
}) => {
  return (
    <div className={cn("py-4", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
