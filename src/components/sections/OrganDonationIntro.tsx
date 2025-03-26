import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Button } from '@/components/ui/button';

/**
 * Introduction section for organ donation information
 * Provides an overview and key facts about organ donation
 */
const OrganDonationIntro = () => {
  return (
    <ScrollSection id="organ-intro" variant="organ">
      {/* Animated title section with gradient underline */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 dark:text-blue-300 mb-6">
          Organspende
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mx-auto mb-8"></div>
        <p className="text-xl text-blue-600/80 dark:text-blue-400/80 max-w-2xl mx-auto">
          Eine Entscheidung, die Leben rettet
        </p>
      </motion.div>

      {/* Main content with staggered animation */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* What is organ donation explanation card */}
        <div className="bg-white/30 dark:bg-blue-950/30 p-6 rounded-xl shadow-sm border border-blue-100 dark:border-blue-900/50">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400 flex items-center">
            <span className="inline-block mr-3 text-blue-500 dark:text-blue-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </span>
            Was ist Organspende?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Organspende ist die Übertragung von Organen oder Geweben von einem Spender auf einen Empfänger. 
            Sie kann Leben retten und die Lebensqualität schwerkranker Menschen erheblich verbessern. 
            In Deutschland warten etwa 9.000 Menschen auf ein Spenderorgan.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Die Organspende erfolgt in der Regel nach dem Tod des Spenders, kann aber in bestimmten Fällen 
            (z.B. Nierenspende) auch zu Lebzeiten stattfinden. Die Entscheidung zur Organspende ist freiwillig 
            und kann jederzeit geändert werden.
          </p>
        </div>
        
        {/* Call to action buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
          <Button 
            variant="default" 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600 shadow-md"
            onClick={() => document.getElementById('organ-what')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Mehr erfahren
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900/30"
            onClick={() => document.getElementById('call-to-action')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Organspendeausweis
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M17 7h.01" />
              <path d="M7 17h.01" />
              <path d="M17 17h.01" />
            </svg>
          </Button>
        </div>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationIntro;
