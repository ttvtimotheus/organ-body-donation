import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const BodyDonationEthics = () => {
  return (
    <ScrollSection id="body-ethics" variant="body">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-400 mb-8 text-center">
          Ethische Fragen zur Körperspende
        </h2>
        
        <div className="space-y-6">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Respekt und Würde</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Ein zentrales ethisches Anliegen ist der respektvolle Umgang mit dem Körper des Verstorbenen. 
                Anatomische Institute legen großen Wert darauf, dass die Körperspender mit Würde behandelt werden. 
                Studierende werden entsprechend angeleitet und sensibilisiert. Viele Institute halten regelmäßige 
                Gedenkfeiern ab, um den Spendern zu danken und ihre Würde zu wahren.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Umgang mit dem Tod</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die Arbeit mit Körperspendern konfrontiert Studierende direkt mit dem Tod und der Sterblichkeit. 
                Dies kann eine emotional herausfordernde Erfahrung sein, bietet aber auch die Möglichkeit, einen 
                professionellen und gleichzeitig einfühlsamen Umgang mit dem Tod zu entwickeln – eine wichtige 
                Kompetenz für den späteren Arztberuf.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Angehörige und Trauerarbeit</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die Körperspende kann für Angehörige eine besondere Herausforderung darstellen. Der übliche 
                Trauerprozess mit Abschiednahme und Bestattung wird verzögert oder verändert. Einige Institute 
                bieten daher spezielle Beratung für Angehörige an und ermöglichen die Teilnahme an späteren 
                Gedenkfeiern, um den Trauerprozess zu unterstützen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-3">Freiwilligkeit und Aufklärung</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die Entscheidung zur Körperspende muss auf einer umfassenden Aufklärung basieren und absolut 
                freiwillig sein. Potenzielle Spender müssen genau wissen, was mit ihrem Körper geschehen wird. 
                Die anatomischen Institute sind verpflichtet, transparent über alle Aspekte der Körperspende zu 
                informieren und keine falschen Erwartungen zu wecken.
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
            &quot;Die Körperspende ist ein Geschenk an die Wissenschaft und die zukünftigen Generationen von Ärzten. 
            Sie verdient höchsten Respekt und eine ethisch fundierte Handhabung. Die Dankbarkeit der medizinischen 
            Gemeinschaft gegenüber den Körperspendern kann nicht hoch genug eingeschätzt werden.&quot;
          </p>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default BodyDonationEthics;
