import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Navigation component that provides site-wide navigation and theme controls
 * Adapts based on active section and donation type
 */
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isOrganMode = activeTab === 'organ';

  // Track scroll position to adjust navbar appearance
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

  // Navigation sections for both organ and body donation
  const organSections = [
    { id: 'organ-intro', label: 'Übersicht' },
    { id: 'organ-what', label: 'Was ist das?' },
    { id: 'organ-process', label: 'Ablauf' },
    { id: 'organ-statistics', label: 'Statistiken' },
    { id: 'organ-requirements', label: 'Voraussetzungen' },
    { id: 'organ-ethics', label: 'Ethik' },
  ];
  
  const bodySections = [
    { id: 'body-intro', label: 'Übersicht' },
    { id: 'body-what', label: 'Was ist das?' },
    { id: 'body-process', label: 'Ablauf' },
    { id: 'body-statistics', label: 'Statistiken' },
    { id: 'body-requirements', label: 'Voraussetzungen' },
    { id: 'body-ethics', label: 'Ethik' },
  ];
  
  const commonSections = [
    { id: 'faq', label: 'FAQ' },
    { id: 'call-to-action', label: 'Handeln' }
  ];

  // Determine which sections to show based on active tab
  const activeSections = isOrganMode 
    ? [...organSections, ...commonSections]
    : [...bodySections, ...commonSections];

  // Handle section click with scrolling
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-2" 
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-4"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and site title */}
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              isOrganMode 
                ? "bg-blue-100 dark:bg-blue-900/50" 
                : "bg-red-100 dark:bg-red-900/50"
            )}>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={cn(
                  isOrganMode 
                    ? "text-blue-600 dark:text-blue-400" 
                    : "text-red-600 dark:text-red-400"
                )}
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {isOrganMode ? (
                  // Heart icon for organ donation
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                ) : (
                  // Body icon for body donation
                  <>
                    <path d="M12 4v16" />
                    <path d="M8 8h8" />
                    <path d="m8 16 4-4 4 4" />
                  </>
                )}
              </motion.svg>
            </div>
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className={cn(
                "text-lg font-bold leading-tight",
                isOrganMode 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "text-red-600 dark:text-red-400"
              )}>
                {isOrganMode ? 'Organspende' : 'Körperspende'}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Informationsportal</span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {activeSections.map((section) => (
              <Button 
                key={section.id}
                variant="ghost" 
                size="sm" 
                className={cn(
                  "px-3 rounded-full transition-colors",
                  activeSection === section.id 
                    ? isOrganMode 
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>

          {/* Controls: Theme toggle and donation type toggle */}
          <div className="flex items-center gap-3">
            {/* Donation Type Toggle */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Toggle 
                pressed={!isOrganMode}
                onPressedChange={handleToggleTheme}
                className={cn(
                  "relative px-16 py-2 border-2 rounded-full transition-all duration-300 min-w-[120px]",
                  isOrganMode 
                    ? "border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/40" 
                    : "border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/30 hover:bg-red-100 dark:hover:bg-red-800/40"
                )}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={cn(
                    "absolute h-5 w-5 rounded-full transition-all duration-300",
                    isOrganMode 
                      ? "bg-blue-500 -translate-x-6" 
                      : "bg-red-500 translate-x-6"
                  )}></div>
                </div>
                <span className={cn(
                  "absolute left-4 text-xs font-medium transition-all",
                  isOrganMode ? "text-blue-700 dark:text-blue-300 font-bold" : "text-gray-500 dark:text-gray-400"
                )}>
                  Organ
                </span>
                <span className={cn(
                  "absolute right-4 text-xs font-medium transition-all",
                  !isOrganMode ? "text-red-700 dark:text-red-300 font-bold" : "text-gray-500 dark:text-gray-400"
                )}>
                  Körper
                </span>
              </Toggle>
            </motion.div>

            {/* Theme Toggle Button */}
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
                <span className="sr-only">Farbschema wechseln</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
                  width="18"
                  height="18"
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

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={mobileMenuOpen ? "hidden" : "block"}
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={mobileMenuOpen ? "block" : "hidden"}
                >
                  <line x1="18" x2="6" y1="6" y2="18" />
                  <line x1="6" x2="18" y1="6" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: mobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {activeSections.map((section) => (
              <Button 
                key={section.id}
                variant="ghost" 
                size="sm" 
                className={cn(
                  "w-full justify-start rounded-lg transition-colors",
                  activeSection === section.id 
                    ? isOrganMode 
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.label}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
