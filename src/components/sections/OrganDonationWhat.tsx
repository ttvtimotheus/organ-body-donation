import React from 'react';
import { motion } from 'framer-motion';
import ScrollSection from '../ui-custom/ScrollSection';
import { Card, CardContent } from '@/components/ui/card';

const organsList = [
  {
    name: 'Herz',
    description: 'Kann bei schweren Herzerkrankungen transplantiert werden, wenn andere Behandlungen nicht mehr wirksam sind.',
    icon: '❤️'
  },
  {
    name: 'Lunge',
    description: 'Wird bei schweren Lungenerkrankungen wie Mukoviszidose oder COPD transplantiert.',
    icon: '🫁'
  },
  {
    name: 'Niere',
    description: 'Das am häufigsten transplantierte Organ. Kann auch von lebenden Spendern gespendet werden.',
    icon: '🫘'
  },
  {
    name: 'Leber',
    description: 'Kann teilweise transplantiert werden, da sie sich regenerieren kann. Auch Lebendspende möglich.',
    icon: '🍺'
  },
  {
    name: 'Bauchspeicheldrüse',
    description: 'Wird oft bei schwerem Diabetes zusammen mit einer Niere transplantiert.',
    icon: '🥞'
  },
  {
    name: 'Dünndarm',
    description: 'Seltener transplantiert, aber wichtig bei schweren Darmerkrankungen.',
    icon: '🌀'
  }
];

const OrganDonationWhat = () => {
  return (
    <ScrollSection id="organ-what" variant="organ">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center">
          Was kann gespendet werden?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {organsList.map((organ, index) => (
            <motion.div
              key={organ.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="overflow-hidden border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{organ.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">{organ.name}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{organ.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Wussten Sie?</strong> Neben Organen können auch Gewebe wie Hornhaut der Augen, Herzklappen, 
            Blutgefäße, Knochen, Knorpel und Haut gespendet werden. Diese können konserviert und später 
            transplantiert werden.
          </p>
        </div>
      </motion.div>
    </ScrollSection>
  );
};

export default OrganDonationWhat;
