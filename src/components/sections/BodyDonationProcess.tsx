import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import Timeline from '../ui-custom/Timeline';

const timelineItems = [
  {
    title: 'Vertrag zu Lebzeiten',
    description: 'Der Körperspender schließt zu Lebzeiten einen Vertrag mit einer anatomischen Einrichtung ab. Dieser Vertrag regelt die Überlassung des Körpers nach dem Tod und alle damit verbundenen Formalitäten.'
  },
  {
    title: 'Tod und Überführung',
    description: 'Nach dem Eintritt des Todes wird die anatomische Einrichtung informiert. Der Körper wird dann zeitnah abgeholt und in die Einrichtung überführt, wo er fachgerecht konserviert wird.'
  },
  {
    title: 'Nutzung in der Anatomie',
    description: 'Der Körper wird für die Ausbildung von Medizinstudierenden und für Forschungszwecke verwendet. Diese Phase kann je nach Einrichtung zwischen einem und drei Jahren dauern.'
  },
  {
    title: 'Würdige Bestattung',
    description: 'Nach Abschluss der Nutzung wird der Körper würdevoll bestattet. Viele anatomische Institute halten jährliche Gedenkfeiern ab, bei denen den Körperspendern gedacht wird.'
  }
];

const BodyDonationProcess = () => {
  return (
    <ScrollSection id="body-process" variant="body">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-8 text-center">
          Ablauf der Körperspende
        </h2>
        
        <div className="bg-white dark:bg-red-950/50 rounded-xl p-6 shadow-sm">
          <Timeline 
            items={timelineItems} 
            variant="red"
          />
        </div>
        
        <motion.div 
          className="mt-8 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 dark:text-gray-300 italic">
            "Die Entscheidung zur Körperspende sollte wohlüberlegt sein und mit Angehörigen besprochen werden. 
            Es ist wichtig, dass die Familie die Entscheidung kennt und respektiert, da sie nach dem Tod 
            mit der Situation umgehen muss."
          </p>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default BodyDonationProcess;
