import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <ScrollSection id="call-to-action" variant="organ" className="bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 dark:from-blue-950 dark:via-purple-950 dark:to-red-950">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Treffen Sie Ihre Entscheidung
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Ob Organspende oder Körperspende – Ihre Entscheidung kann Leben retten oder die medizinische 
          Ausbildung und Forschung unterstützen. Informieren Sie sich, sprechen Sie mit Ihren Angehörigen 
          und dokumentieren Sie Ihren Willen.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Organspende */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-blue-950/50 p-6 rounded-xl shadow-sm border border-blue-200 dark:border-blue-800"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Organspende</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Bestellen Sie einen Organspendeausweis oder laden Sie ihn als PDF herunter. 
              Tragen Sie ihn immer bei sich und informieren Sie Ihre Angehörigen über Ihre Entscheidung.
            </p>
            
            <div className="space-y-3">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://www.organspende-info.de/organspendeausweis-download-und-bestellen.html" target="_blank" rel="noopener noreferrer" className="w-full">
                  Organspendeausweis bestellen
                </a>
              </Button>
              
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950">
                <a href="https://www.organspende-info.de/fileadmin/Organspende/05_Mediathek/02_Materialien/Ausgefuellter_Organspendeausweis.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
                  Organspendeausweis als PDF
                </a>
              </Button>
            </div>
          </motion.div>
          
          {/* Körperspende */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-red-950/50 p-6 rounded-xl shadow-sm border border-red-200 dark:border-red-800"
          >
            <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Körperspende</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Kontaktieren Sie eine anatomische Einrichtung in Ihrer Nähe für detaillierte Informationen 
              zur Körperspende und zum Abschluss eines Körperspendevertrags.
            </p>
            
            <div className="space-y-3">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                <a href="https://www.anatom.uni-leipzig.de/koerperspende" target="_blank" rel="noopener noreferrer" className="w-full">
                  Informationen zur Körperspende
                </a>
              </Button>
              
              <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950">
                <a href="https://www.anat.uni-heidelberg.de/koerperspende" target="_blank" rel="noopener noreferrer" className="w-full">
                  Anatomische Institute finden
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* QR-Code-Generator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 max-w-md mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Organspendeausweis als QR-Code</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Scannen Sie diesen QR-Code, um einen digitalen Organspendeausweis herunterzuladen:
          </p>
          
          <div className="bg-white p-4 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.organspende-info.de/fileadmin/Organspende/05_Mediathek/02_Materialien/Ausgefuellter_Organspendeausweis.pdf" 
              alt="QR-Code für Organspendeausweis" 
              className="w-full h-full"
            />
          </div>
        </motion.div>
        
        <div className="mt-12 text-sm text-gray-600 dark:text-gray-400">
          <p>© 2025 Informationsportal Organspende & Körperspende</p>
          <p className="mt-2">
            Alle Informationen wurden sorgfältig recherchiert, erheben jedoch keinen Anspruch auf Vollständigkeit. 
            Bei medizinischen Fragen konsultieren Sie bitte einen Arzt.
          </p>
        </div>
      </motion.div>
    </ScrollSection>
  );
};

export default CallToAction;
