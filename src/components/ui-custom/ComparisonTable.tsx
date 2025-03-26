import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ComparisonTableProps {
  className?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ className }) => {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="min-w-full"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700 text-left">
                Aspekt
              </th>
              <th className="p-4 bg-blue-50 dark:bg-blue-900/30 border-b-2 border-blue-200 dark:border-blue-800 text-left">
                <span className="text-blue-600 dark:text-blue-400 font-bold">Organspende</span>
              </th>
              <th className="p-4 bg-red-50 dark:bg-red-900/30 border-b-2 border-red-200 dark:border-red-800 text-left">
                <span className="text-red-600 dark:text-red-400 font-bold">Körperspende</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 border-b border-gray-200 dark:border-gray-800 font-medium">Zweck</td>
              <td className="p-4 border-b border-blue-100 dark:border-blue-900/50">
                Rettung von Menschenleben durch Transplantation von Organen
              </td>
              <td className="p-4 border-b border-red-100 dark:border-red-900/50">
                Ausbildung von Medizinstudierenden und medizinische Forschung
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 border-b border-gray-200 dark:border-gray-800 font-medium">Zeitpunkt der Entscheidung</td>
              <td className="p-4 border-b border-blue-100 dark:border-blue-900/50">
                Zu Lebzeiten (Organspendeausweis) oder durch Angehörige nach dem Tod
              </td>
              <td className="p-4 border-b border-red-100 dark:border-red-900/50">
                Ausschließlich zu Lebzeiten durch vertragliche Vereinbarung
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 border-b border-gray-200 dark:border-gray-800 font-medium">Was wird gespendet</td>
              <td className="p-4 border-b border-blue-100 dark:border-blue-900/50">
                Einzelne Organe (z.B. Herz, Lunge, Nieren, Leber) und Gewebe
              </td>
              <td className="p-4 border-b border-red-100 dark:border-red-900/50">
                Der gesamte Körper
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 border-b border-gray-200 dark:border-gray-800 font-medium">Voraussetzungen</td>
              <td className="p-4 border-b border-blue-100 dark:border-blue-900/50">
                Feststellung des Hirntods, keine schweren Infektionskrankheiten
              </td>
              <td className="p-4 border-b border-red-100 dark:border-red-900/50">
                Vertrag mit anatomischer Einrichtung, bestimmte Ausschlusskriterien (z.B. schwere Infektionen)
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 border-b border-gray-200 dark:border-gray-800 font-medium">Dauer der Nutzung</td>
              <td className="p-4 border-b border-blue-100 dark:border-blue-900/50">
                Sofortige Transplantation nach Entnahme
              </td>
              <td className="p-4 border-b border-red-100 dark:border-red-900/50">
                1-3 Jahre für Lehre und Forschung
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 border-b border-gray-200 dark:border-gray-800 font-medium">Bestattung</td>
              <td className="p-4 border-b border-blue-100 dark:border-blue-900/50">
                Normale Bestattung möglich, direkt nach Organentnahme
              </td>
              <td className="p-4 border-b border-red-100 dark:border-red-900/50">
                Bestattung durch die anatomische Einrichtung nach Abschluss der Nutzung
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 border-b border-gray-200 dark:border-gray-800 font-medium">Kosten</td>
              <td className="p-4 border-b border-blue-100 dark:border-blue-900/50">
                Keine Kosten für Spender oder Angehörige
              </td>
              <td className="p-4 border-b border-red-100 dark:border-red-900/50">
                Überführungskosten werden meist von der Einrichtung übernommen, Bestattungskosten variieren
              </td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="p-4 font-medium">Kombination möglich</td>
              <td className="p-4" colSpan={2}>
                In der Regel schließen sich Organspende und Körperspende gegenseitig aus
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default ComparisonTable;
