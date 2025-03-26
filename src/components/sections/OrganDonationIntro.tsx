import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';

const OrganDonationIntro = () => {
  return (
    <ScrollSection id="organ-intro" variant="organ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 dark:text-blue-300 mb-6">
          Organspende
        </h1>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
          Was ist Organspende?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
          Organspende ist die Übertragung von Organen oder Geweben von einem Spender auf einen Empfänger. 
          Sie kann Leben retten und die Lebensqualität schwerkranker Menschen erheblich verbessern. 
          In Deutschland warten etwa 9.000 Menschen auf ein Spenderorgan.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-200">
          Die Organspende erfolgt in der Regel nach dem Tod des Spenders, kann aber in bestimmten Fällen 
          (z.B. Nierenspende) auch zu Lebzeiten stattfinden. Die Entscheidung zur Organspende ist freiwillig 
          und kann jederzeit geändert werden.
        </p>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationIntro;
