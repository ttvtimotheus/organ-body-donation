import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLast?: boolean;
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  variant: 'blue' | 'red';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  title, 
  description, 
  icon, 
  isLast = false,
  index,
  activeIndex,
  setActiveIndex,
  variant
}) => {
  const isActive = activeIndex === index;
  const isPast = activeIndex > index;
  const isFuture = activeIndex < index;
  
  // Farben basierend auf Variante und Zustand
  const getColors = () => {
    if (variant === 'blue') {
      return {
        active: "from-blue-400 to-blue-600 shadow-blue-300/50 dark:shadow-blue-900/50",
        past: "from-blue-300 to-blue-500 opacity-80",
        future: "from-blue-200 to-blue-400 opacity-60",
        line: "bg-blue-200 dark:bg-blue-800",
        text: "text-blue-700 dark:text-blue-300",
        hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-900/30"
      };
    } else {
      return {
        active: "from-red-400 to-red-600 shadow-red-300/50 dark:shadow-red-900/50",
        past: "from-red-300 to-red-500 opacity-80",
        future: "from-red-200 to-red-400 opacity-60",
        line: "bg-red-200 dark:bg-red-800",
        text: "text-red-700 dark:text-red-300",
        hoverBg: "hover:bg-red-50 dark:hover:bg-red-900/30"
      };
    }
  };
  
  const colors = getColors();
  
  // Bestimme die Farbe des Zeitstrahl-Punkts
  const circleColor = isActive 
    ? colors.active
    : isPast 
      ? colors.past
      : colors.future;
  
  return (
    <div className="relative">
      <motion.div 
        className={cn(
          "flex gap-4 cursor-pointer transition-all duration-300 rounded-lg p-3 -mx-3",
          isActive ? "bg-white/50 dark:bg-gray-800/30 shadow-sm" : colors.hoverBg
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        onClick={() => setActiveIndex(index)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex flex-col items-center">
          <motion.div 
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center z-10",
              "bg-gradient-to-br shadow-lg",
              circleColor,
              isActive && "scale-110"
            )}
            whileHover={{ scale: 1.1 }}
            animate={{ 
              scale: isActive ? 1.1 : 1,
              transition: { duration: 0.3 }
            }}
          >
            {icon || (
              <span className="text-lg font-bold text-white">
                {index + 1}
              </span>
            )}
          </motion.div>
          {!isLast && (
            <div className={cn("w-0.5 grow my-2", colors.line)}></div>
          )}
        </div>
        <div className="pb-4">
          <h3 className={cn("text-xl font-bold mb-2", isActive && colors.text)}>
            {title}
          </h3>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
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
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className={cn("py-4", className)}>
      <div className="space-y-2">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            isLast={index === items.length - 1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            variant={variant}
          />
        ))}
      </div>
      
      <div className="mt-8 flex justify-between">
        <motion.button
          className={cn(
            "px-4 py-2 rounded-full text-white font-medium",
            "bg-gradient-to-r shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
            variant === 'blue' 
              ? "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
              : "from-red-400 to-red-600 hover:from-red-500 hover:to-red-700"
          )}
          onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Zurück
        </motion.button>
        
        <motion.button
          className={cn(
            "px-4 py-2 rounded-full text-white font-medium",
            "bg-gradient-to-r shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
            variant === 'blue' 
              ? "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
              : "from-red-400 to-red-600 hover:from-red-500 hover:to-red-700"
          )}
          onClick={() => setActiveIndex(Math.min(items.length - 1, activeIndex + 1))}
          disabled={activeIndex === items.length - 1}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Weiter
        </motion.button>
      </div>
    </div>
  );
};

export default Timeline;
