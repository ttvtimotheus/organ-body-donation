import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const BodyDonationRequirements = () => {
  return (
    <ScrollSection id="body-requirements" variant="body">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-8 text-center">
          Voraussetzungen & Bedingungen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Schriftliche Vereinbarung</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die Körperspende muss zu Lebzeiten durch einen schriftlichen Vertrag mit einer anatomischen Einrichtung 
                vereinbart werden. Dieser Vertrag regelt alle Einzelheiten und ist rechtlich bindend. Eine bloße 
                Willensbekundung oder ein Vermerk im Testament reicht nicht aus.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Alter und Gesundheitszustand</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Grundsätzlich gibt es keine Altersbeschränkung für Körperspender. Allerdings behalten sich die 
                anatomischen Institute vor, eine Körperspende in bestimmten Fällen abzulehnen, etwa bei schweren 
                Infektionskrankheiten, starkem Übergewicht oder nach umfangreichen Operationen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Keine gleichzeitige Organspende</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Eine Körperspende schließt in der Regel eine Organspende aus. Der Körper muss vollständig sein, 
                um für die anatomische Lehre und Forschung genutzt werden zu können. Daher muss man sich zwischen 
                Körper- und Organspende entscheiden.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Räumliche Nähe</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die meisten anatomischen Institute nehmen nur Körperspenden aus der näheren Umgebung an, da der 
                Transport über längere Strecken problematisch sein kann. Es ist daher wichtig, sich an ein Institut 
                in der Nähe des Wohnorts zu wenden.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-red-950/50 p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Weitere wichtige Hinweise</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Die Kosten für die Überführung in die anatomische Einrichtung werden in der Regel vom Institut übernommen.</li>
            <li>Die spätere Bestattung wird ebenfalls vom Institut organisiert und finanziert.</li>
            <li>Eine individuelle Grabstätte ist in der Regel nicht vorgesehen, meist erfolgt eine anonyme Beisetzung.</li>
            <li>Angehörige sollten über die Entscheidung zur Körperspende informiert sein und den Körperspendeausweis kennen.</li>
            <li>Die Entscheidung zur Körperspende kann jederzeit widerrufen werden.</li>
          </ul>
        </motion.div>
        
        <div className="mt-8 p-4 bg-red-100 dark:bg-red-900/50 rounded-lg border border-red-200 dark:border-red-800">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            <strong>Hinweis:</strong> Die genauen Voraussetzungen und Bedingungen können je nach anatomischer Einrichtung 
            variieren. Es ist ratsam, sich direkt beim gewünschten Institut über die spezifischen Anforderungen zu informieren.
          </p>
        </div>
      </motion.div>
    </ScrollSection>
  );
};

export default BodyDonationRequirements;
