import React from 'react';
import Link from 'next/link';

/**
 * Footer component that displays source links and site information
 * Provides credibility by linking to official sources for both organ and body donation
 */
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Official sources for organ donation information 
            These links provide users with reliable sources to learn more about organ donation */}
          <div>
            <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Quellen: Organspende</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.organspende-info.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Bundesinstitut für Öffentliche Gesundheit
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.bundesgesundheitsministerium.de/themen/praevention/organspende.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Bundesministerium für Gesundheit
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.dso.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Deutsche Stiftung Organtransplantation
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.eurotransplant.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  Eurotransplant
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Official sources for body donation information 
            These links provide users with reliable sources to learn more about body donation */}
          <div>
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">Quellen: Körperspende</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.anatomische-gesellschaft.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Anatomische Gesellschaft
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.uni-heidelberg.de/de/studium/beratung-service/koerperspende" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Institut für Anatomie und Zellbiologie Heidelberg
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.charite.de/service/pressemitteilung/artikel/detail/koerperspende_fuer_die_wissenschaft/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Charité Berlin
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.uniklinikum-jena.de/anatomie1/Körperspende.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  Institut für Anatomie Jena
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Allgemeine Quellen und Rechtliches 
            This section provides general resources and legal information related to organ and body donation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Allgemeine Quellen</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://www.gesetze-im-internet.de/tpg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  Transplantationsgesetz
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.aerzteblatt.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  Deutsches Ärzteblatt
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.ethikrat.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  Deutscher Ethikrat
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.who.int/transplantation/organ/en/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  Weltgesundheitsorganisation (WHO)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and disclaimer section 
          This section provides copyright information and a disclaimer about the website's content */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date().getFullYear()} Organ- und Körperspende Informationsportal. Diese Website dient ausschließlich Informationszwecken.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Die medizinischen Informationen auf dieser Website ersetzen nicht die professionelle Beratung durch medizinisches Fachpersonal.
          </p>
          <div className="mt-4">
            <Link 
              href="/impressum" 
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
