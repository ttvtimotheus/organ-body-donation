import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <ScrollSection id="faq" variant="organ" className="bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 dark:from-blue-950 dark:via-purple-950 dark:to-red-950">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
          Häufig gestellte Fragen
        </h2>
        
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Organspende</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-blue-200 dark:border-blue-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Kann ich bestimmen, wer meine Organe erhält?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                Nein, die Vergabe von Spenderorganen erfolgt zentral über Eurotransplant nach medizinischen Kriterien 
                wie Dringlichkeit, Erfolgsaussicht und Wartezeit. Eine gezielte Spende an bestimmte Personen ist nicht 
                möglich, mit Ausnahme der Lebendspende, die in der Regel nur zwischen nahestehenden Personen erlaubt ist.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-blue-200 dark:border-blue-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Wird mein Körper nach der Organentnahme entstellt sein?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                Nein, die Organentnahme erfolgt mit großer Sorgfalt und Respekt. Der Körper wird nach der Entnahme 
                chirurgisch verschlossen und kann normal aufgebahrt und bestattet werden. Eine offene Aufbahrung ist 
                möglich, und äußerlich sind keine Spuren der Organentnahme sichtbar.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-blue-200 dark:border-blue-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Erhalten meine Angehörigen Informationen über die Empfänger meiner Organe?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                Aus Datenschutzgründen werden in der Regel keine persönlichen Informationen über die Empfänger 
                weitergegeben. Die Angehörigen können jedoch allgemeine Informationen erhalten, wie etwa welche 
                Organe transplantiert wurden und ob die Transplantationen erfolgreich waren.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-blue-200 dark:border-blue-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Kann ich auch nur bestimmte Organe spenden?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                Ja, auf dem Organspendeausweis können Sie festlegen, welche Organe und Gewebe entnommen werden 
                dürfen und welche nicht. Sie können die Spende also auf bestimmte Organe beschränken oder 
                bestimmte Organe von der Spende ausschließen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">Körperspende</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-5" className="border-red-200 dark:border-red-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Kann ich sowohl Organspender als auch Körperspender sein?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                In der Regel schließen sich Organspende und Körperspende gegenseitig aus. Für die anatomische 
                Lehre und Forschung wird der vollständige Körper benötigt. Wenn Sie sich für eine Körperspende 
                entscheiden, sollten Sie dies auch auf Ihrem Organspendeausweis vermerken, um Missverständnisse 
                zu vermeiden.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border-red-200 dark:border-red-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Welche Kosten entstehen für mich oder meine Angehörigen bei einer Körperspende?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                Die Kosten für die Überführung in die anatomische Einrichtung und die spätere Bestattung werden 
                in der Regel vom Institut übernommen. Es können jedoch Kosten für die Sterbeurkunde und andere 
                behördliche Dokumente anfallen. Die genauen Regelungen sollten im Körperspendevertrag festgehalten sein.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border-red-200 dark:border-red-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Wie lange wird mein Körper in der anatomischen Einrichtung verwendet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                Die Nutzungsdauer variiert je nach Institut und kann zwischen einem und drei Jahren liegen. 
                In einigen Fällen können bestimmte Präparate auch länger für spezielle Forschungszwecke oder 
                als Lehrsammlung aufbewahrt werden. Die genaue Dauer wird im Körperspendevertrag festgelegt.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border-red-200 dark:border-red-800">
              <AccordionTrigger className="text-gray-800 dark:text-gray-200">
                Können meine Angehörigen an der späteren Bestattung teilnehmen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300">
                Viele anatomische Institute halten jährliche Gedenkfeiern ab, an denen Angehörige teilnehmen können. 
                Eine individuelle Bestattung mit persönlicher Grabstätte ist in der Regel nicht vorgesehen. Die 
                genauen Modalitäten unterscheiden sich je nach Institut und sollten vor Vertragsabschluss geklärt werden.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 p-5 bg-gradient-to-r from-blue-100 to-red-100 dark:from-blue-900/50 dark:to-red-900/50 rounded-lg border border-gray-200 dark:border-gray-800"
        >
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Haben Sie weitere Fragen? Wenden Sie sich an die zuständigen Stellen für detaillierte Informationen:
            <br />
            <a href="https://www.organspende-info.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Bundeszentrale für gesundheitliche Aufklärung</a>
            {' '} | {' '}
            <a href="https://www.dso.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Deutsche Stiftung Organtransplantation</a>
          </p>
        </motion.div>
      </motion.div>
    </ScrollSection>
  );
};

export default FAQ;
