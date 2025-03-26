import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Button } from '@/components/ui/button';

const BodyDonationIntro = () => {
  return (
    <ScrollSection id="body-intro" variant="body">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 dark:text-red-400 mb-6">
          Körperspende
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-red-400 via-red-600 to-red-400 rounded-full mx-auto mb-8"></div>
        <p className="text-xl text-red-600/80 dark:text-red-400/80 max-w-2xl mx-auto">
          Ein Geschenk für Wissenschaft und Lehre
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="bg-white/30 dark:bg-red-950/30 p-6 rounded-xl shadow-sm border border-red-100 dark:border-red-900/50">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-red-600 dark:text-red-400 flex items-center">
            <span className="inline-block mr-3 text-red-500 dark:text-red-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </span>
            Was ist Körperspende?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            Körperspende bezeichnet die Entscheidung, den eigenen Körper nach dem Tod der medizinischen 
            Wissenschaft und Forschung zur Verfügung zu stellen. Im Gegensatz zur Organspende geht es 
            hierbei nicht um die Transplantation von Organen, sondern um die Verwendung des gesamten 
            Körpers für Lehre und Forschung.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Körperspender leisten einen unschätzbaren Beitrag zur Ausbildung von Medizinstudierenden und 
            zur Weiterentwicklung medizinischer Verfahren. Ohne Körperspender wäre die praxisnahe Ausbildung 
            von Ärzten kaum möglich. Die Entscheidung zur Körperspende muss zu Lebzeiten getroffen und 
            vertraglich festgehalten werden.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
          <Button 
            variant="default" 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white dark:bg-red-700 dark:hover:bg-red-600 shadow-md"
            onClick={() => document.getElementById('body-what')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Mehr erfahren
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-red-300 text-red-700 hover:bg-red-50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/30"
            onClick={() => document.getElementById('call-to-action')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Informationen anfordern
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"/>
              <path d="M12 13v9"/>
              <path d="M12 2v4"/>
            </svg>
          </Button>
        </div>
      </motion.div>
    </ScrollSection>
  );
};

export default BodyDonationIntro;
