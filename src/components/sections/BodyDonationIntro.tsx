import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';

const BodyDonationIntro = () => {
  return (
    <ScrollSection id="body-intro" variant="body">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-700 dark:text-red-400 mb-6">
          Körperspende
        </h1>
        <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-red-600 dark:text-red-400">
          Was ist Körperspende?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          Körperspende bezeichnet die Entscheidung, den eigenen Körper nach dem Tod der medizinischen 
          Wissenschaft und Forschung zur Verfügung zu stellen. Im Gegensatz zur Organspende geht es 
          hierbei nicht um die Transplantation von Organen, sondern um die Verwendung des gesamten 
          Körpers für Lehre und Forschung.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          Körperspender leisten einen unschätzbaren Beitrag zur Ausbildung von Medizinstudierenden und 
          zur Weiterentwicklung medizinischer Verfahren. Ohne Körperspender wäre die praxisnahe Ausbildung 
          von Ärzten kaum möglich. Die Entscheidung zur Körperspende muss zu Lebzeiten getroffen und 
          vertraglich festgehalten werden.
        </p>
      </motion.div>
    </ScrollSection>
  );
};

export default BodyDonationIntro;
