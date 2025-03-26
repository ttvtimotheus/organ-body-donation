import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const BodyDonationScience = () => {
  return (
    <ScrollSection id="body-science" variant="body">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-8 text-center">
          Wissenschaftlicher Nutzen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Ausbildung von Medizinern</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die praktische Arbeit am anatomischen Präparat ist ein unverzichtbarer Bestandteil der medizinischen 
                Ausbildung. Studierende erlernen die komplexe dreidimensionale Struktur des menschlichen Körpers, 
                die Lagebeziehungen der Organe und die Variabilität anatomischer Strukturen. Diese Erfahrung ist durch 
                kein Lehrbuch oder digitales Modell zu ersetzen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Entwicklung neuer OP-Techniken</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Chirurgen können an Körperspenden neue Operationstechniken entwickeln und trainieren. Dies ist besonders 
                wichtig für komplexe Eingriffe oder den Einsatz neuer Technologien. Die Möglichkeit, am realen menschlichen 
                Gewebe zu üben, erhöht die Sicherheit und Qualität späterer Operationen an Patienten.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Erforschung von Krankheiten</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Körperspenden ermöglichen die detaillierte Untersuchung von Krankheitsverläufen und -mechanismen. 
                Besonders bei seltenen Erkrankungen oder komplexen Krankheitsbildern können wertvolle Erkenntnisse 
                gewonnen werden, die zur Verbesserung von Diagnose- und Therapiemethoden beitragen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Entwicklung medizinischer Geräte</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Bei der Entwicklung neuer medizinischer Geräte und Implantate ist die Erprobung am menschlichen Körper 
                ein wichtiger Schritt. Körperspenden helfen dabei, die Funktionalität, Sicherheit und Anwendbarkeit 
                neuer Technologien zu verbessern, bevor sie am Patienten eingesetzt werden.
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
          <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Zitate von Medizinstudierenden</h3>
          
          <div className="space-y-4 italic">
            <p className="text-gray-700 dark:text-gray-300 border-l-4 border-red-300 pl-4 py-1">
              "Die Arbeit am anatomischen Präparat hat mir ein tiefes Verständnis für die menschliche Anatomie vermittelt, 
              das ich aus keinem Buch hätte lernen können. Ich bin den Körperspendern unendlich dankbar für diese 
              unersetzliche Lernerfahrung."
              <span className="block mt-1 text-sm not-italic">— Medizinstudentin, 4. Semester</span>
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 border-l-4 border-red-300 pl-4 py-1">
              "Im Präparierkurs habe ich nicht nur Anatomie gelernt, sondern auch Respekt vor dem menschlichen Körper 
              und dem Leben. Diese Erfahrung hat mich als angehenden Arzt und als Mensch geprägt."
              <span className="block mt-1 text-sm not-italic">— Medizinstudent, 6. Semester</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default BodyDonationScience;
