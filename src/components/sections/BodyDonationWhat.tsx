import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const BodyDonationWhat = () => {
  return (
    <ScrollSection id="body-what" variant="body">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-8 text-center">
          Was passiert mit dem Körper?
        </h2>
        
        <div className="space-y-6">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Anatomische Präparation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nach dem Tod wird der Körper in die anatomische Einrichtung (meist an einer Universität) überführt. 
                Dort wird er fachgerecht konserviert, um ihn für die Lehre und Forschung zu erhalten. Die Konservierung 
                erfolgt durch spezielle Verfahren, die den natürlichen Zersetzungsprozess aufhalten.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Nutzung in der Lehre</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Der Körper wird für die Ausbildung von Medizinstudierenden verwendet. In anatomischen Kursen lernen die 
                Studierenden den Aufbau des menschlichen Körpers kennen. Diese praktische Erfahrung ist durch kein Lehrbuch 
                oder digitales Modell zu ersetzen und bildet die Grundlage für das spätere ärztliche Handeln.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Medizinische Forschung</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Körperspenden ermöglichen auch die Weiterentwicklung medizinischer Verfahren. Chirurgen können neue 
                Operationstechniken erproben, Orthopäden neue Implantate testen oder Neurologen die komplexen Strukturen 
                des Nervensystems erforschen. Dies trägt maßgeblich zum medizinischen Fortschritt bei.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Würdige Bestattung</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nach Abschluss der Nutzung, was je nach Einrichtung zwischen einem und drei Jahren dauern kann, wird der 
                Körper würdevoll bestattet. Viele anatomische Institute halten jährliche Gedenkfeiern ab, bei denen den 
                Körperspendern gedacht wird. Die Bestattung erfolgt meist in Form einer Feuerbestattung auf einem Friedhof.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-5 bg-red-100 dark:bg-red-900/50 rounded-lg border border-red-200 dark:border-red-800"
        >
          <p className="text-gray-700 dark:text-gray-300 italic">
            &quot;Der respektvolle Umgang mit den Körperspendern ist ein zentrales Anliegen aller anatomischen Einrichtungen. 
            Die Studierenden werden dazu angehalten, den Körperspendern mit Würde und Dankbarkeit zu begegnen, da sie 
            durch ihre Spende einen unschätzbaren Beitrag zur medizinischen Ausbildung leisten.&quot;
          </p>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default BodyDonationWhat;
