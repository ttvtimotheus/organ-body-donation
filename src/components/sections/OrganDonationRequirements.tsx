import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const OrganDonationRequirements = () => {
  return (
    <ScrollSection id="organ-requirements" variant="organ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">
          Voraussetzungen für die Organspende
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Alter</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Grundsätzlich gibt es keine feste Altersgrenze für die Organspende. Die Eignung der Organe wird 
                individuell medizinisch beurteilt. Auch ältere Menschen können Organspender sein. Für Minderjährige 
                gelten besondere Regelungen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Gesundheitszustand</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Auch Menschen mit Vorerkrankungen können Organspender sein. Entscheidend ist der Zustand der einzelnen 
                Organe zum Zeitpunkt der Spende. Bestimmte Erkrankungen wie aktive Krebserkrankungen oder schwere 
                Infektionen können eine Organspende ausschließen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Hirntod</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Für eine Organspende nach dem Tod muss der Hirntod zweifelsfrei festgestellt worden sein. Dies bedeutet 
                den vollständigen und unumkehrbaren Ausfall der Gesamtfunktion des Großhirns, des Kleinhirns und des 
                Hirnstamms.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Zustimmung</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die wichtigste Voraussetzung ist die Zustimmung zur Organspende. Diese kann zu Lebzeiten durch einen 
                Organspendeausweis oder eine Patientenverfügung erfolgen. Liegt keine Erklärung vor, werden die 
                Angehörigen nach dem mutmaßlichen Willen des Verstorbenen befragt.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-blue-950/50 p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Besonderheiten bei Lebendspenden</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Lebendspenden sind in Deutschland nur für bestimmte Organe möglich (hauptsächlich Niere und Teile der Leber)</li>
            <li>Der Spender muss volljährig und einwilligungsfähig sein</li>
            <li>Es muss eine enge persönliche Verbundenheit zum Empfänger bestehen (z.B. Verwandtschaft, enge Freundschaft)</li>
            <li>Die Spende muss freiwillig erfolgen und darf nicht kommerziell motiviert sein</li>
            <li>Eine unabhängige Kommission muss die Freiwilligkeit und Zulässigkeit der Spende prüfen</li>
          </ul>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationRequirements;
