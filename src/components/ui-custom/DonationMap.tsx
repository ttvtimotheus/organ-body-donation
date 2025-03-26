import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Location {
  id: string;
  name: string;
  institution: string;
  address: string;
  website: string;
  phone: string;
  email: string;
  position: {
    x: number;
    y: number;
  };
}

interface DonationMapProps {
  className?: string;
}

const bodyDonationLocations: Location[] = [
  {
    id: 'berlin',
    name: 'Berlin',
    institution: 'Charité - Universitätsmedizin Berlin',
    address: 'Charitéplatz 1, 10117 Berlin',
    website: 'https://anatomie.charite.de',
    phone: '+49 30 450 528092',
    email: 'koerperspende@charite.de',
    position: { x: 72, y: 30 }
  },
  {
    id: 'hamburg',
    name: 'Hamburg',
    institution: 'Universitätsklinikum Hamburg-Eppendorf',
    address: 'Martinistraße 52, 20246 Hamburg',
    website: 'https://www.uke.de/anatomie',
    phone: '+49 40 7410 52249',
    email: 'anatomie@uke.de',
    position: { x: 50, y: 20 }
  },
  {
    id: 'muenchen',
    name: 'München',
    institution: 'Ludwig-Maximilians-Universität München',
    address: 'Pettenkoferstraße 11, 80336 München',
    website: 'https://www.anatomie.med.uni-muenchen.de',
    phone: '+49 89 2180 72680',
    email: 'koerperspende@med.uni-muenchen.de',
    position: { x: 60, y: 95 }
  },
  {
    id: 'koeln',
    name: 'Köln',
    institution: 'Universität zu Köln',
    address: 'Joseph-Stelzmann-Straße 9, 50931 Köln',
    website: 'https://anatomie.uni-koeln.de',
    phone: '+49 221 478 5008',
    email: 'anatomie@uni-koeln.de',
    position: { x: 30, y: 45 }
  },
  {
    id: 'heidelberg',
    name: 'Heidelberg',
    institution: 'Universität Heidelberg',
    address: 'Im Neuenheimer Feld 307, 69120 Heidelberg',
    website: 'https://www.uni-heidelberg.de/koerperspende',
    phone: '+49 6221 54 8606',
    email: 'koerperspende@med.uni-heidelberg.de',
    position: { x: 40, y: 60 }
  },
  {
    id: 'leipzig',
    name: 'Leipzig',
    institution: 'Universität Leipzig',
    address: 'Liebigstraße 13, 04103 Leipzig',
    website: 'https://anatomie.medizin.uni-leipzig.de',
    phone: '+49 341 97 22000',
    email: 'koerperspende@medizin.uni-leipzig.de',
    position: { x: 65, y: 45 }
  },
  {
    id: 'hannover',
    name: 'Hannover',
    institution: 'Medizinische Hochschule Hannover',
    address: 'Carl-Neuberg-Straße 1, 30625 Hannover',
    website: 'https://www.mh-hannover.de/anatomie',
    phone: '+49 511 532 2868',
    email: 'anatomie@mh-hannover.de',
    position: { x: 50, y: 35 }
  },
  {
    id: 'jena',
    name: 'Jena',
    institution: 'Friedrich-Schiller-Universität Jena',
    address: 'Teichgraben 7, 07743 Jena',
    website: 'https://www.uniklinikum-jena.de/anatomie1',
    phone: '+49 3641 9396100',
    email: 'koerperspende@med.uni-jena.de',
    position: { x: 60, y: 50 }
  },
  {
    id: 'frankfurt',
    name: 'Frankfurt',
    institution: 'Goethe-Universität Frankfurt',
    address: 'Theodor-Stern-Kai 7, 60590 Frankfurt am Main',
    website: 'https://www.anatomie.uni-frankfurt.de',
    phone: '+49 69 6301 6904',
    email: 'anatomie@kgu.de',
    position: { x: 40, y: 50 }
  },
  {
    id: 'mainz',
    name: 'Mainz',
    institution: 'Johannes Gutenberg-Universität Mainz',
    address: 'Saarstraße 21, 55122 Mainz',
    website: 'https://www.unimedizin-mainz.de/anatomie',
    phone: '+49 6131 17 7358',
    email: 'koerperspende@uni-mainz.de',
    position: { x: 35, y: 55 }
  },
  {
    id: 'freiburg',
    name: 'Freiburg',
    institution: 'Albert-Ludwigs-Universität Freiburg',
    address: 'Albertstraße 17, 79104 Freiburg',
    website: 'https://www.anatomie.uni-freiburg.de',
    phone: '+49 761 203 5090',
    email: 'koerperspende@anat.uni-freiburg.de',
    position: { x: 30, y: 75 }
  },
  {
    id: 'kiel',
    name: 'Kiel',
    institution: 'Christian-Albrechts-Universität zu Kiel',
    address: 'Otto-Hahn-Platz 8, 24118 Kiel',
    website: 'https://www.anatomie.uni-kiel.de',
    phone: '+49 431 880 2499',
    email: 'anatomie@anat.uni-kiel.de',
    position: { x: 50, y: 10 }
  },
  {
    id: 'dresden',
    name: 'Dresden',
    institution: 'Technische Universität Dresden',
    address: 'Fiedlerstraße 42, 01307 Dresden',
    website: 'https://tu-dresden.de/med/anatomie',
    phone: '+49 351 458 6110',
    email: 'anatomie@mailbox.tu-dresden.de',
    position: { x: 75, y: 45 }
  },
  {
    id: 'wuerzburg',
    name: 'Würzburg',
    institution: 'Julius-Maximilians-Universität Würzburg',
    address: 'Koellikerstraße 6, 97070 Würzburg',
    website: 'https://www.anatomie.uni-wuerzburg.de',
    phone: '+49 931 31 82710',
    email: 'koerperspende@uni-wuerzburg.de',
    position: { x: 45, y: 65 }
  },
  {
    id: 'bochum',
    name: 'Bochum',
    institution: 'Ruhr-Universität Bochum',
    address: 'Universitätsstraße 150, 44801 Bochum',
    website: 'https://www.ruhr-uni-bochum.de/anatomie',
    phone: '+49 234 32 23669',
    email: 'anatomie@rub.de',
    position: { x: 30, y: 40 }
  },
  {
    id: 'goettingen',
    name: 'Göttingen',
    institution: 'Georg-August-Universität Göttingen',
    address: 'Kreuzbergring 36, 37075 Göttingen',
    website: 'https://www.anatomie.uni-goettingen.de',
    phone: '+49 551 39 7000',
    email: 'koerperspende@med.uni-goettingen.de',
    position: { x: 45, y: 40 }
  }
];

const DonationMap: React.FC<DonationMapProps> = ({ className }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isListExpanded, setIsListExpanded] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredLocations = bodyDonationLocations.filter(location => {
    const searchLower = searchTerm.toLowerCase();
    return (
      location.name.toLowerCase().includes(searchLower) ||
      location.institution.toLowerCase().includes(searchLower) ||
      location.address.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Körperspende-Institute in Deutschland
          </h2>
          <Button 
            variant="outline" 
            onClick={() => setIsListExpanded(!isListExpanded)}
            className="flex items-center justify-center gap-2"
          >
            {isListExpanded ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
                Liste einklappen
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                Liste anzeigen
              </>
            )}
          </Button>
        </div>

        {isListExpanded && (
          <>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Institut oder Stadt suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredLocations.map((location) => (
                <Card 
                  key={location.id} 
                  className={cn(
                    "transition-all duration-200 cursor-pointer hover:shadow-md",
                    selectedLocation?.id === location.id ? "border-red-300 dark:border-red-700" : ""
                  )}
                  onClick={() => setSelectedLocation(location)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-red-600 dark:text-red-400">
                      {location.name}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-1">
                      {location.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-gray-600 dark:text-gray-400">{location.address}</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span>{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <span>{location.email}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full mt-2 border-red-200 text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(location.website, '_blank');
                      }}
                    >
                      Website besuchen
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredLocations.length === 0 && (
              <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <p className="text-gray-600 dark:text-gray-400">
                  Keine Institute gefunden, die Ihren Suchkriterien entsprechen.
                </p>
              </div>
            )}
          </>
        )}

        {!isListExpanded && (
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400">
              Klicken Sie auf &quot;Liste anzeigen&quot;, um alle Körperspende-Institute in Deutschland zu sehen.
            </p>
          </div>
        )}

        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          <p>
            <strong>Hinweis:</strong> Dies ist eine Übersicht der anatomischen Institute in Deutschland, die Körperspenden annehmen. 
            Bitte informieren Sie sich direkt bei den Instituten über die aktuellen Bedingungen und Verfahren.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationMap;
