import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatData {
  label: string;
  value: number;
  color: string;
  darkColor: string;
  description: string;
}

interface StatisticsVisualizerProps {
  className?: string;
}

const StatisticsVisualizer: React.FC<StatisticsVisualizerProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<'waiting' | 'donors' | 'transplants'>('waiting');
  
  const waitingListData: StatData[] = [
    { 
      label: 'Niere', 
      value: 6500, 
      color: 'bg-blue-500', 
      darkColor: 'dark:bg-blue-600',
      description: 'Etwa 6.500 Menschen warten in Deutschland auf eine Nierentransplantation.'
    },
    { 
      label: 'Leber', 
      value: 850, 
      color: 'bg-green-500', 
      darkColor: 'dark:bg-green-600',
      description: 'Etwa 850 Menschen warten auf eine Lebertransplantation.'
    },
    { 
      label: 'Herz', 
      value: 700, 
      color: 'bg-red-500', 
      darkColor: 'dark:bg-red-600',
      description: 'Etwa 700 Menschen warten auf ein Spenderherz.'
    },
    { 
      label: 'Lunge', 
      value: 350, 
      color: 'bg-purple-500', 
      darkColor: 'dark:bg-purple-600',
      description: 'Etwa 350 Menschen warten auf eine Lungentransplantation.'
    },
    { 
      label: 'Andere', 
      value: 600, 
      color: 'bg-yellow-500', 
      darkColor: 'dark:bg-yellow-600',
      description: 'Etwa 600 Menschen warten auf andere Organe wie Bauchspeicheldrüse oder Dünndarm.'
    }
  ];
  
  const donorsData: StatData[] = [
    { 
      label: '2020', 
      value: 913, 
      color: 'bg-blue-500', 
      darkColor: 'dark:bg-blue-600',
      description: '913 Organspender im Jahr 2020.'
    },
    { 
      label: '2021', 
      value: 933, 
      color: 'bg-blue-600', 
      darkColor: 'dark:bg-blue-700',
      description: '933 Organspender im Jahr 2021.'
    },
    { 
      label: '2022', 
      value: 869, 
      color: 'bg-blue-700', 
      darkColor: 'dark:bg-blue-800',
      description: '869 Organspender im Jahr 2022.'
    },
    { 
      label: '2023', 
      value: 965, 
      color: 'bg-blue-800', 
      darkColor: 'dark:bg-blue-900',
      description: '965 Organspender im Jahr 2023.'
    },
    { 
      label: '2024', 
      value: 982, 
      color: 'bg-blue-900', 
      darkColor: 'dark:bg-blue-950',
      description: 'Prognose: 982 Organspender im Jahr 2024.'
    }
  ];
  
  const transplantData: StatData[] = [
    { 
      label: 'Niere', 
      value: 1500, 
      color: 'bg-blue-500', 
      darkColor: 'dark:bg-blue-600',
      description: 'Etwa 1.500 Nierentransplantationen pro Jahr in Deutschland.'
    },
    { 
      label: 'Leber', 
      value: 800, 
      color: 'bg-green-500', 
      darkColor: 'dark:bg-green-600',
      description: 'Etwa 800 Lebertransplantationen pro Jahr.'
    },
    { 
      label: 'Herz', 
      value: 300, 
      color: 'bg-red-500', 
      darkColor: 'dark:bg-red-600',
      description: 'Etwa 300 Herztransplantationen pro Jahr.'
    },
    { 
      label: 'Lunge', 
      value: 250, 
      color: 'bg-purple-500', 
      darkColor: 'dark:bg-purple-600',
      description: 'Etwa 250 Lungentransplantationen pro Jahr.'
    },
    { 
      label: 'Andere', 
      value: 150, 
      color: 'bg-yellow-500', 
      darkColor: 'dark:bg-yellow-600',
      description: 'Etwa 150 Transplantationen anderer Organe pro Jahr.'
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
      default:
        return waitingListData;
    }
  };
  
  const activeData = getActiveData();
  const maxValue = Math.max(...activeData.map(item => item.value));
  
  return (
    <div className={cn("w-full", className)}>
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
          Warteliste
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
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
        <p>Quelle: Deutsche Stiftung Organtransplantation (DSO), Eurotransplant</p>
        <p>Hinweis: Die Zahlen sind gerundet und können von aktuellen Statistiken abweichen.</p>
      </div>
    </div>
  );
};

export default StatisticsVisualizer;
