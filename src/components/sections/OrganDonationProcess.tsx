import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import Timeline from '../ui-custom/Timeline';

const timelineItems = [
  {
    title: 'Diagnose Hirntod',
    description: 'Der Hirntod wird von zwei unabhängigen Ärzten festgestellt, die nicht am Transplantationsprozess beteiligt sind. Dies ist die Voraussetzung für eine Organspende nach dem Tod.'
  },
  {
    title: 'Zustimmung / Ausweis',
    description: 'Die Zustimmung zur Organspende kann zu Lebzeiten durch einen Organspendeausweis oder eine Patientenverfügung erfolgen. Alternativ entscheiden die Angehörigen im Sinne des Verstorbenen.'
  },
  {
    title: 'Organentnahme',
    description: 'Die Entnahme der Organe erfolgt in einer Operation unter sterilen Bedingungen. Der Körper wird anschließend würdevoll versorgt und kann normal bestattet werden.'
  },
  {
    title: 'Transport / Matching',
    description: 'Die entnommenen Organe werden schnellstmöglich zu den Empfängern transportiert. Die Vermittlung erfolgt zentral über Eurotransplant nach medizinischen Kriterien.'
  },
  {
    title: 'Transplantation',
    description: 'Die Transplantation beim Empfänger erfolgt so schnell wie möglich, um die Funktionsfähigkeit des Organs zu gewährleisten. Nach der Operation beginnt die lebenslange Nachsorge.'
  }
];

const OrganDonationProcess = () => {
  return (
    <ScrollSection id="organ-process" variant="organ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">
          Ablauf der Organspende
        </h2>
        
        <div className="bg-white dark:bg-blue-950/50 rounded-xl p-6 shadow-sm">
          <Timeline 
            items={timelineItems} 
            colorTheme="blue"
          />
        </div>
        
        <motion.div 
          className="mt-8 p-4 bg-blue-100 dark:bg-blue-900/70 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 dark:text-gray-300 italic">
            &quot;Der Prozess der Organspende ist komplex und erfordert eine sorgfältige Koordination. 
            Jeder Schritt ist wichtig, um sicherzustellen, dass die Organe optimal genutzt werden können.&quot;
          </p>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationProcess;
