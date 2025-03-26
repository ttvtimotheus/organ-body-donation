import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const OrganDonationLegal = () => {
  return (
    <ScrollSection id="organ-legal" variant="organ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">
          Gesetzliche Grundlagen
        </h2>
        
        <Card className="mb-8 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              Die Entscheidungslösung in Deutschland
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In Deutschland gilt seit 2012 die sogenannte "Entscheidungslösung". Diese besagt, dass jeder Bürger 
              regelmäßig die Möglichkeit erhalten soll, sich mit dem Thema Organspende auseinanderzusetzen und eine 
              informierte Entscheidung zu treffen.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Im Gegensatz zur "Widerspruchslösung", die in einigen europäischen Ländern gilt, ist in Deutschland 
              niemand automatisch Organspender. Eine Organentnahme ist nur zulässig, wenn der Verstorbene zu Lebzeiten 
              zugestimmt hat oder die Angehörigen im Sinne des Verstorbenen einer Spende zustimmen.
            </p>
          </CardContent>
        </Card>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Wichtige gesetzliche Regelungen
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Transplantationsgesetz (TPG)</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Regelt die Spende, Entnahme und Übertragung von Organen und Geweben in Deutschland.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Hirntoddiagnostik</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Der Hirntod muss nach den Richtlinien der Bundesärztekammer von zwei unabhängigen Ärzten festgestellt werden.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Organvermittlung</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Die Vermittlung von Spenderorganen erfolgt zentral über Eurotransplant nach medizinischen Kriterien.
              </p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Lebendspende</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Lebendspenden sind nur unter bestimmten Voraussetzungen und nach Prüfung durch eine Ethikkommission zulässig.
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-6 p-4 bg-blue-100 dark:bg-blue-900/70 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            <strong>Hinweis:</strong> Die gesetzlichen Grundlagen können sich ändern. Aktuelle Informationen finden Sie 
            auf den Seiten der Bundeszentrale für gesundheitliche Aufklärung (BZgA) und der Deutschen Stiftung Organtransplantation (DSO).
          </p>
        </div>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationLegal;
