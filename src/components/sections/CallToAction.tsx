import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ScrollSection from '../ui-custom/ScrollSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Call to Action section that provides users with actionable steps
 * for both organ and body donation registration
 */
const CallToAction = () => {
  // Controls which donation type tab is currently active
  const [activeTab, setActiveTab] = useState<'organ' | 'body'>('organ');
  // Controls visibility of the QR code for digital organ donation card
  const [showQRCode, setShowQRCode] = useState(false);
  // Form fields for the organ donation card
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  
  /**
   * Generates a QR code for the digital organ donation card
   */
  const handleGenerateQRCode = () => {
    // In a real application, this would generate a QR code with the user's information
    setShowQRCode(true);
  };

  return (
    <ScrollSection id="call-to-action" variant="organ" className="bg-gradient-to-br from-blue-50 via-purple-50 to-red-50 dark:from-blue-950 dark:via-purple-950 dark:to-red-950">
      {/* Section header with animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Treffen Sie Ihre Entscheidung
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Ob Organspende oder Körperspende – Ihre Entscheidung kann Leben retten oder die medizinische 
          Ausbildung und Forschung unterstützen. Informieren Sie sich, sprechen Sie mit Ihren Angehörigen 
          und dokumentieren Sie Ihren Willen.
        </p>
        
        <Tabs 
          defaultValue="organ" 
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as 'organ' | 'body')}
          className="w-full max-w-3xl mx-auto"
        >
          {/* Tab selection buttons */}
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger 
              value="organ"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Organspende
            </TabsTrigger>
            <TabsTrigger 
              value="body"
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
            >
              Körperspende
            </TabsTrigger>
          </TabsList>

          {/* Organ donation action content */}
          <TabsContent value="organ" className="mt-0">
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-400">Organspendeausweis</CardTitle>
                <CardDescription>
                  Dokumentieren Sie Ihre Entscheidung mit einem Organspendeausweis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Toggle between digital and physical card options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/50 h-auto py-4"
                    onClick={() => setShowQRCode(false)}
                  >
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                      <span>Physischen Ausweis bestellen</span>
                    </div>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-950/50 h-auto py-4"
                    onClick={() => setShowQRCode(true)}
                  >
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M8 7h.01" />
                        <path d="M16 7h.01" />
                        <path d="M8 12h.01" />
                        <path d="M16 12h.01" />
                        <path d="M8 17h.01" />
                        <path d="M16 17h.01" />
                      </svg>
                      <span>Digitalen Ausweis erstellen</span>
                    </div>
                  </Button>
                </div>

                {/* Conditional rendering based on user selection */}
                <AnimatePresence mode="wait">
                  {showQRCode ? (
                    // Digital card form with QR code generation
                    <motion.div
                      key="digital"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input 
                            id="name" 
                            placeholder="Vor- und Nachname" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthdate">Geburtsdatum</Label>
                          <Input 
                            id="birthdate" 
                            type="date" 
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                          />
                        </div>
                      </div>
                      
                      {/* QR code placeholder - would be generated in production */}
                      <div className="flex justify-center p-4">
                        <div className="w-48 h-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M8 7h.01" />
                            <path d="M16 7h.01" />
                            <path d="M8 12h.01" />
                            <path d="M16 12h.01" />
                            <path d="M8 17h.01" />
                            <path d="M16 17h.01" />
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        Scannen Sie den QR-Code, um Ihren digitalen Organspendeausweis zu speichern.
                      </p>
                    </motion.div>
                  ) : (
                    // Physical card ordering information
                    <motion.div
                      key="physical"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <p className="text-gray-700 dark:text-gray-300">
                        Sie können einen physischen Organspendeausweis kostenlos bestellen oder herunterladen:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Über die <a href="https://www.organspende-info.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Bundeszentrale für gesundheitliche Aufklärung</a></li>
                        <li>In vielen Apotheken, Arztpraxen und Krankenkassen</li>
                        <li>Als PDF zum Ausdrucken und Ausfüllen</li>
                      </ul>
                      <div className="flex justify-center mt-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open('https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/3_Downloads/O/Organspende/Organspendeausweis_ausfuellbar.pdf', '_blank')}>
                          PDF herunterladen
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
              <CardFooter className="flex flex-col text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <p>
                  Tragen Sie Ihren Organspendeausweis immer bei sich und informieren Sie Ihre Angehörigen über Ihre Entscheidung.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Body donation action content */}
          <TabsContent value="body" className="mt-0">
            <Card className="border-red-200 dark:border-red-800">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700 dark:text-red-400">Körperspende</CardTitle>
                <CardDescription>
                  Informieren Sie sich über die Möglichkeiten der Körperspende für die Wissenschaft.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Information about body donation */}
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-gray-700 dark:text-gray-300">
                    Um Ihren Körper der Wissenschaft zu spenden, müssen Sie direkt mit einem anatomischen Institut Kontakt aufnehmen:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Jedes Institut hat eigene Verfahren und Anforderungen</li>
                    <li>Sie müssen in der Regel einen Vertrag mit dem Institut abschließen</li>
                    <li>Informieren Sie Ihre Angehörigen über Ihre Entscheidung</li>
                    <li>Klären Sie alle Fragen direkt mit dem Institut</li>
                  </ul>
                  
                  <div className="flex justify-center mt-4">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open('/impressum', '_blank')}
                    >
                      Mehr Informationen
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
              <CardFooter className="flex flex-col text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 pt-4">
                <p>
                  Die Körperspende ist ein wichtiger Beitrag zur medizinischen Ausbildung und Forschung. 
                  Bedenken Sie, dass nicht alle Institute Körperspenden annehmen können.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </ScrollSection>
  );
};

export default CallToAction;
