import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  activeTab: string;
  onTabChange: (value: string) => void;
  onSectionChange: (section: string) => void;
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection,
  activeTab,
  onTabChange,
  onSectionChange,
  onThemeToggle
}) => {
  const [scrolled, setScrolled] = useState(false);
  const isOrganMode = activeTab === 'organ';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    onTabChange(isOrganMode ? 'body' : 'organ');
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm shadow-sm py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.span 
            className={`text-xl font-bold ${
              isOrganMode 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-red-600 dark:text-red-400'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isOrganMode ? 'Organspende' : 'Körperspende'}
          </motion.span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${activeSection === 'faq' ? 'bg-gray-100 dark:bg-gray-800' : ''} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
              onClick={() => onSectionChange('faq')}
            >
              FAQ
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`${activeSection === 'call-to-action' ? 'bg-gray-100 dark:bg-gray-800' : ''} hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
              onClick={() => onSectionChange('call-to-action')}
            >
              Handeln
            </Button>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Toggle 
              pressed={!isOrganMode}
              onPressedChange={handleToggleTheme}
              className={`relative px-8 py-2 border-2 rounded-full transition-all duration-300 ${
                isOrganMode 
                  ? 'border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/40' 
                  : 'border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-800/40'
              }`}
            >
              <span className={`absolute left-2 text-xs font-medium ${isOrganMode ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-500 dark:text-gray-400'}`}>
                Organ
              </span>
              <span className={`absolute right-2 text-xs font-medium ${!isOrganMode ? 'text-red-600 dark:text-red-400 font-bold' : 'text-gray-500 dark:text-gray-400'}`}>
                Körper
              </span>
            </Toggle>
          </motion.div>

          <motion.div
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              variant="outline" 
              size="icon" 
              onClick={onThemeToggle}
              className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="sr-only">Toggle theme</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hidden dark:block"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="block dark:hidden"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
