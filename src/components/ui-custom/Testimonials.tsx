import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  type: 'organ' | 'body';
}

interface TestimonialsProps {
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Weber',
    role: 'Empfänger einer Spenderniere',
    quote: 'Nach fünf Jahren Dialyse hat mir die Organspende ein neues Leben geschenkt. Ich kann wieder reisen, arbeiten und Zeit mit meiner Familie verbringen, ohne von der Dialyse abhängig zu sein. Ich bin dem unbekannten Spender unendlich dankbar.',
    image: '/images/testimonial-1.jpg',
    type: 'organ'
  },
  {
    id: '2',
    name: 'Sophia Müller',
    role: 'Angehörige eines Organspenders',
    quote: 'Als mein Mann plötzlich verstarb, war die Entscheidung zur Organspende ein Lichtblick in der dunkelsten Zeit. Zu wissen, dass er drei Menschen das Leben gerettet hat, gibt seinem Tod einen Sinn und tröstet uns bis heute.',
    image: '/images/testimonial-2.jpg',
    type: 'organ'
  },
  {
    id: '3',
    name: 'Dr. Julia Becker',
    role: 'Transplantationsmedizinerin',
    quote: 'In meiner Arbeit erlebe ich täglich, wie Organspenden Leben verändern. Die Dankbarkeit und Lebensfreude der Empfänger zu sehen, ist das Schönste an meinem Beruf. Jeder Spender hinterlässt ein Vermächtnis, das weit über sein eigenes Leben hinausreicht.',
    image: '/images/testimonial-3.jpg',
    type: 'organ'
  },
  {
    id: '4',
    name: 'Prof. Dr. Thomas Schneider',
    role: 'Anatom',
    quote: 'Körperspender ermöglichen es uns, die nächste Generation von Ärzten bestmöglich auszubilden. Kein Lehrbuch und keine Simulation kann das Lernen am echten menschlichen Körper ersetzen. Wir begegnen jedem Körperspender mit tiefem Respekt.',
    image: '/images/testimonial-4.jpg',
    type: 'body'
  },
  {
    id: '5',
    name: 'Lisa Hoffmann',
    role: 'Medizinstudentin',
    quote: 'Der Anatomiekurs war der wichtigste Teil meines Studiums. Die Möglichkeit, am menschlichen Körper zu lernen, hat mein Verständnis der Medizin grundlegend geprägt. Ich bin den Menschen, die ihren Körper der Wissenschaft zur Verfügung gestellt haben, zutiefst dankbar.',
    image: '/images/testimonial-5.jpg',
    type: 'body'
  },
  {
    id: '6',
    name: 'Markus Schmidt',
    role: 'Zukünftiger Körperspender',
    quote: 'Ich habe mich für die Körperspende entschieden, weil ich auch nach meinem Tod etwas Sinnvolles beitragen möchte. Der Gedanke, dass junge Ärzte an mir lernen und dadurch später vielen Patienten helfen können, gibt mir ein gutes Gefühl.',
    image: '/images/testimonial-6.jpg',
    type: 'body'
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ className }) => {
  const [activeType, setActiveType] = useState<'organ' | 'body' | 'all'>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  
  const filteredTestimonials = activeType === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeType);
  
  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % filteredTestimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((activeIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-center space-x-2 mb-8">
        <Button
          variant={activeType === 'all' ? 'default' : 'outline'}
          onClick={() => { setActiveType('all'); setActiveIndex(0); }}
          className={activeType === 'all' ? 'bg-purple-600 hover:bg-purple-700' : ''}
        >
          Alle Erfahrungen
        </Button>
        <Button
          variant={activeType === 'organ' ? 'default' : 'outline'}
          onClick={() => { setActiveType('organ'); setActiveIndex(0); }}
          className={activeType === 'organ' ? 'bg-blue-600 hover:bg-blue-700' : ''}
        >
          Organspende
        </Button>
        <Button
          variant={activeType === 'body' ? 'default' : 'outline'}
          onClick={() => { setActiveType('body'); setActiveIndex(0); }}
          className={activeType === 'body' ? 'bg-red-600 hover:bg-red-700' : ''}
        >
          Körperspende
        </Button>
      </div>
      
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredTestimonials[activeIndex]?.id || 'empty'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px]"
          >
            {filteredTestimonials.length > 0 ? (
              <Card className={cn(
                "border-2 shadow-lg",
                filteredTestimonials[activeIndex].type === 'organ' 
                  ? 'border-blue-200 dark:border-blue-800' 
                  : 'border-red-200 dark:border-red-800'
              )}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0 flex items-center justify-center">
                      {/* Placeholder für Bilder - in einer echten Anwendung würden hier echte Bilder verwendet */}
                      <span className={cn(
                        "text-3xl font-bold",
                        filteredTestimonials[activeIndex].type === 'organ' 
                          ? 'text-blue-500 dark:text-blue-400' 
                          : 'text-red-500 dark:text-red-400'
                      )}>
                        {filteredTestimonials[activeIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        &quot;{filteredTestimonials[activeIndex].quote}&quot;
                      </blockquote>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {filteredTestimonials[activeIndex].name}
                      </div>
                      <div className={cn(
                        "text-sm",
                        filteredTestimonials[activeIndex].type === 'organ' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-red-600 dark:text-red-400'
                      )}>
                        {filteredTestimonials[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="flex space-x-1">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        className={cn(
                          "w-2 h-2 rounded-full transition-colors",
                          index === activeIndex 
                            ? (filteredTestimonials[activeIndex].type === 'organ' 
                                ? 'bg-blue-600 dark:bg-blue-400' 
                                : 'bg-red-600 dark:bg-red-400')
                            : 'bg-gray-300 dark:bg-gray-700'
                        )}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Gehe zu Testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={prevTestimonial}
                      className="h-8 w-8"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6"/>
                      </svg>
                      <span className="sr-only">Vorheriges Testimonial</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      onClick={nextTestimonial}
                      className="h-8 w-8"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                      <span className="sr-only">Nächstes Testimonial</span>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ) : (
              <div className="flex items-center justify-center min-h-[200px] border rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">Keine Erfahrungsberichte gefunden</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
        Hinweis: Die dargestellten Erfahrungsberichte basieren auf realen Erfahrungen, wurden jedoch anonymisiert und teilweise angepasst.
      </p>
    </div>
  );
};

export default Testimonials;
