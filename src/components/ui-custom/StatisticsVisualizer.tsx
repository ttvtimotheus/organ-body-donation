import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Interface for statistical data items
 */
interface StatData {
  label: string;
  value: number;
  color: string;
  darkColor: string;
  description: string;
}

interface StatisticsVisualizerProps {
  className?: string;
  type?: 'organ' | 'body';
}

/**
 * StatisticsVisualizer component that displays interactive statistics
 * for organ and body donation with various visualization options
 */
const StatisticsVisualizer: React.FC<StatisticsVisualizerProps> = ({ 
  className,
  type = 'organ'
}) => {
  const [activeTab, setActiveTab] = useState<'waiting' | 'donors' | 'transplants' | 'documentation'>('waiting');
  
  // Warteliste-Daten basierend auf den 2024-Statistiken
  const waitingListData: StatData[] = [
    { 
      label: 'Niere', 
      value: 6095, 
      color: 'bg-blue-500', 
      darkColor: 'dark:bg-blue-600',
      description: '6.095 benötigte Spendernieren in Deutschland (2024).'
    },
    { 
      label: 'Leber', 
      value: 875, 
      color: 'bg-green-500', 
      darkColor: 'dark:bg-green-600',
      description: '875 benötigte Spenderlebern (2024).'
    },
    { 
      label: 'Herz', 
      value: 656, 
      color: 'bg-red-500', 
      darkColor: 'dark:bg-red-600',
      description: '656 benötigte Spenderherzen (2024).'
    },
    { 
      label: 'Lunge', 
      value: 308, 
      color: 'bg-purple-500', 
      darkColor: 'dark:bg-purple-600',
      description: '308 benötigte Spenderlungen (2024).'
    },
    { 
      label: 'Bauchspeicheldrüse', 
      value: 20, 
      color: 'bg-yellow-500', 
      darkColor: 'dark:bg-yellow-600',
      description: '20 benötigte Bauchspeicheldrüsen (2024).'
    }
  ];
  
  // Spender-Daten für 2024
  const donorsData: StatData[] = [
    { 
      label: 'Postmortale Spender', 
      value: 953, 
      color: 'bg-blue-600', 
      darkColor: 'dark:bg-blue-700',
      description: '953 postmortale Organspender*innen im Jahr 2024.'
    },
    { 
      label: 'Nieren-Lebendspenden', 
      value: 632, 
      color: 'bg-green-600', 
      darkColor: 'dark:bg-green-700',
      description: '632 Nieren-Lebendspenden im Jahr 2024.'
    },
    { 
      label: 'Leber-Lebendspenden', 
      value: 56, 
      color: 'bg-yellow-600', 
      darkColor: 'dark:bg-yellow-700',
      description: '56 Leber-Lebendspenden im Jahr 2024.'
    }
  ];
  
  // Transplantations-Daten für 2024
  const transplantData: StatData[] = [
    { 
      label: 'Niere', 
      value: 1391, 
      color: 'bg-blue-500', 
      darkColor: 'dark:bg-blue-600',
      description: '1.391 transplantierte Nieren im Jahr 2024.'
    },
    { 
      label: 'Leber', 
      value: 785, 
      color: 'bg-green-500', 
      darkColor: 'dark:bg-green-600',
      description: '785 transplantierte Lebern im Jahr 2024.'
    },
    { 
      label: 'Herz', 
      value: 315, 
      color: 'bg-red-500', 
      darkColor: 'dark:bg-red-600',
      description: '315 transplantierte Herzen im Jahr 2024.'
    },
    { 
      label: 'Lunge', 
      value: 290, 
      color: 'bg-purple-500', 
      darkColor: 'dark:bg-purple-600',
      description: '290 transplantierte Lungen im Jahr 2024.'
    },
    { 
      label: 'Bauchspeicheldrüse', 
      value: 71, 
      color: 'bg-yellow-500', 
      darkColor: 'dark:bg-yellow-600',
      description: '71 transplantierte Bauchspeicheldrüsen im Jahr 2024.'
    },
    { 
      label: 'Darm', 
      value: 2, 
      color: 'bg-orange-500', 
      darkColor: 'dark:bg-orange-600',
      description: '2 transplantierte Därme im Jahr 2024.'
    }
  ];
  
  // Dokumentations-Daten zur Organspende-Entscheidung
  const documentationData: StatData[] = [
    { 
      label: 'Organspendeausweis', 
      value: 15, 
      color: 'bg-blue-500', 
      darkColor: 'dark:bg-blue-600',
      description: '15% der Bevölkerung haben ihre Entscheidung im Organspendeausweis dokumentiert.'
    },
    { 
      label: 'Patientenverfügung', 
      value: 7, 
      color: 'bg-green-500', 
      darkColor: 'dark:bg-green-600',
      description: '7% haben ihre Entscheidung in der Patientenverfügung dokumentiert.'
    },
    { 
      label: 'Beides', 
      value: 26, 
      color: 'bg-purple-500', 
      darkColor: 'dark:bg-purple-600',
      description: '26% haben ihre Entscheidung sowohl im Organspendeausweis als auch in der Patientenverfügung dokumentiert.'
    },
    { 
      label: 'Entschieden, nicht dokumentiert', 
      value: 35, 
      color: 'bg-yellow-500', 
      darkColor: 'dark:bg-yellow-600',
      description: '35% haben sich entschieden, aber nicht dokumentiert.'
    },
    { 
      label: 'Keine Entscheidung', 
      value: 36, 
      color: 'bg-red-500', 
      darkColor: 'dark:bg-red-600',
      description: '36% haben keine Entscheidung zur Organspende getroffen.'
    }
  ];
  
  const getActiveData = () => {
    switch (activeTab) {
      case 'waiting':
        return waitingListData;
      case 'donors':
        return donorsData;
      case 'transplants':
        return transplantData;
      case 'documentation':
        return documentationData;
      default:
        return waitingListData;
    }
  };
  
  const activeData = getActiveData();
  const maxValue = Math.max(...activeData.map(item => item.value));
  
  // Zusätzliche Statistiken als Karten
  const additionalStats = [
    {
      title: "Gesamtzahl Warteliste",
      value: "8.260",
      description: "Patient*innen auf der Warteliste (Stand 31.12.2023)"
    },
    {
      title: "Entnommene Organe",
      value: "2.855",
      description: "Entnommene und transplantierte Organe (2024)"
    },
    {
      title: "Organspendeausweis",
      value: "41%",
      description: "Der Bevölkerung besitzen einen Organspendeausweis"
    }
  ];
  
  return (
    <div className={cn("w-full", className)}>
      <div className="mb-8">
        <Tabs defaultValue="charts" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="charts">Statistiken</TabsTrigger>
            <TabsTrigger value="cards">Übersicht</TabsTrigger>
          </TabsList>
          
          <TabsContent value="charts" className="space-y-6">
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <button
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-colors",
                  activeTab === 'waiting' 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                )}
                onClick={() => setActiveTab('waiting')}
              >
                Benötigte Organe
              </button>
              <button
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-colors",
                  activeTab === 'donors' 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                )}
                onClick={() => setActiveTab('donors')}
              >
                Spender
              </button>
              <button
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-colors",
                  activeTab === 'transplants' 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                )}
                onClick={() => setActiveTab('transplants')}
              >
                Transplantationen
              </button>
              <button
                className={cn(
                  "px-4 py-2 rounded-full font-medium transition-colors",
                  activeTab === 'documentation' 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                )}
                onClick={() => setActiveTab('documentation')}
              >
                Dokumentation
              </button>
            </div>
            
            <div className="space-y-6">
              {activeData.map((item, index) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{item.label}</span>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{item.value.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <motion.div 
                      className={cn("h-full rounded-full", item.color, item.darkColor)}
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.value / maxValue) * 100}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cards">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {additionalStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                      <CardDescription className="mt-2">{stat.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">Wussten Sie schon?</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mit einer Organspende können bis zu 8 Menschenleben gerettet werden. 
                Trotzdem besitzen nur 41% der Deutschen einen Organspendeausweis (47% der Frauen, 36% der Männer).
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Quelle: BZgA, Repräsentativstudie 2022 (Zimmering & Hammes, 2023)
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
        <p>Daten basierend auf offiziellen Statistiken der Deutschen Stiftung Organtransplantation (DSO) und der Bundeszentrale für gesundheitliche Aufklärung (BZgA) für das Jahr 2024.</p>
      </div>
    </div>
  );
};

export default StatisticsVisualizer;
