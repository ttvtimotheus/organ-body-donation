import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const OrganDonationEthics = () => {
  return (
    <ScrollSection id="organ-ethics" variant="organ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">
          Ethische Fragen zur Organspende
        </h2>
        
        <div className="space-y-6">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Freiwilligkeit der Entscheidung</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die Entscheidung zur Organspende muss freiwillig und ohne Druck erfolgen. Jeder Mensch hat das Recht, 
                selbst über seinen Körper zu bestimmen – zu Lebzeiten und darüber hinaus. Daher ist es wichtig, dass 
                die Entscheidung auf ausreichender Information basiert und respektiert wird.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Würde des Verstorbenen</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Auch nach dem Tod hat der Mensch ein Recht auf Würde. Bei der Organentnahme wird der Körper mit Respekt 
                behandelt. Nach der Entnahme wird der Körper würdevoll versorgt, sodass eine normale Bestattung möglich ist. 
                Die Angehörigen können in gewohnter Weise Abschied nehmen.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Organknappheit und Verteilungsgerechtigkeit</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die Nachfrage nach Spenderorganen übersteigt das Angebot deutlich. Dies wirft Fragen der gerechten Verteilung auf. 
                Die Zuteilung erfolgt nach medizinischen Kriterien wie Dringlichkeit, Erfolgsaussicht und Wartezeit – nicht nach 
                sozialen oder finanziellen Aspekten. Dennoch bleibt die Frage, wie mit der Knappheit umgegangen werden soll.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Hirntodkonzept</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Die Organentnahme nach dem Tod setzt die Feststellung des Hirntods voraus. Das Hirntodkonzept wird manchmal 
                kritisch hinterfragt, da der Körper durch intensivmedizinische Maßnahmen noch Funktionen zeigt. Medizinisch 
                und rechtlich gilt der Hirntod jedoch als sicheres Todeszeichen, da die Gesamtfunktion des Gehirns 
                unwiederbringlich erloschen ist.
              </p>
            </CardContent>
          </Card>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-5 bg-blue-100 dark:bg-blue-900/70 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <p className="text-gray-700 dark:text-gray-300 italic">
              "Die ethischen Fragen zur Organspende haben keine einfachen Antworten. Sie erfordern eine persönliche 
              Auseinandersetzung und Abwägung. Wichtig ist, dass jeder Mensch die Möglichkeit hat, eine informierte 
              und selbstbestimmte Entscheidung zu treffen."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationEthics;
