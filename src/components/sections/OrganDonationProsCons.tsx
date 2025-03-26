import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';

const OrganDonationProsCons = () => {
  return (
    <ScrollSection id="organ-pros-cons" variant="organ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">
          Pro & Contra Organspende
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pro-Argumente */}
          <div className="bg-blue-50 dark:bg-blue-900/50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">Pro-Argumente</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Leben retten</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Mit einer Organspende können mehrere Menschenleben gerettet werden.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Lebensqualität verbessern</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Viele Empfänger können nach einer Transplantation wieder ein nahezu normales Leben führen.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Sinnstiftung</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Der Tod eines Menschen kann durch die Organspende einen tieferen Sinn erhalten.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Selbstbestimmung</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Die Entscheidung zur Organspende ist ein Akt der Selbstbestimmung und Nächstenliebe.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Entlastung der Angehörigen</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Eine klare Entscheidung zu Lebzeiten entlastet die Angehörigen in einer schweren Situation.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contra-Argumente */}
          <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Contra-Argumente</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Religiöse/weltanschauliche Bedenken</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Manche religiöse oder weltanschauliche Überzeugungen stehen einer Organspende entgegen.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Zweifel am Hirntodkonzept</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Einige Menschen zweifeln daran, dass der Hirntod tatsächlich mit dem Tod des Menschen gleichzusetzen ist.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Angst vor unzureichender medizinischer Versorgung</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Befürchtung, dass bei bekannter Spendebereitschaft weniger intensiv um das Leben gekämpft wird.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Unversehrtheit des Körpers</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Wunsch nach körperlicher Unversehrtheit auch nach dem Tod.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Misstrauen gegenüber dem Verteilungssystem</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Sorge, dass Organe nicht nach objektiven Kriterien verteilt werden.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-5 bg-blue-100 dark:bg-blue-900/70 rounded-lg text-center"
        >
          <p className="text-gray-700 dark:text-gray-300">
            Die Entscheidung für oder gegen eine Organspende ist eine persönliche Entscheidung, 
            die jeder Mensch für sich selbst treffen sollte. Wichtig ist, dass die Entscheidung 
            auf fundierten Informationen basiert und dokumentiert wird.
          </p>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationProsCons;
