import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: {
      organ: number;
      body: number;
    };
  }[];
}

interface DecisionQuizProps {
  className?: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Was ist Ihnen nach Ihrem Tod wichtiger?",
    options: [
      { 
        text: "Dass ich anderen Menschen helfen kann, weiterzuleben", 
        score: { organ: 3, body: 0 } 
      },
      { 
        text: "Dass ich zur medizinischen Ausbildung und Forschung beitrage", 
        score: { organ: 0, body: 3 } 
      },
      { 
        text: "Dass mein Körper möglichst unversehrt bleibt", 
        score: { organ: -2, body: -2 } 
      },
      { 
        text: "Ich bin mir nicht sicher", 
        score: { organ: 0, body: 0 } 
      }
    ]
  },
  {
    id: 2,
    text: "Wie stehen Sie zu einer längeren Nutzung Ihres Körpers nach dem Tod?",
    options: [
      { 
        text: "Ich möchte, dass mein Körper schnell bestattet wird", 
        score: { organ: 1, body: -2 } 
      },
      { 
        text: "Es ist in Ordnung, wenn einzelne Organe verwendet werden", 
        score: { organ: 2, body: -1 } 
      },
      { 
        text: "Es ist in Ordnung, wenn mein Körper für längere Zeit (1-3 Jahre) genutzt wird", 
        score: { organ: -1, body: 3 } 
      },
      { 
        text: "Die Zeitspanne spielt für mich keine Rolle", 
        score: { organ: 1, body: 1 } 
      }
    ]
  },
  {
    id: 3,
    text: "Was ist Ihnen bei der Bestattung wichtig?",
    options: [
      { 
        text: "Ich möchte eine traditionelle Bestattung mit meiner Familie", 
        score: { organ: 2, body: -1 } 
      },
      { 
        text: "Die Art der Bestattung ist mir nicht wichtig", 
        score: { organ: 1, body: 2 } 
      },
      { 
        text: "Ich finde eine Bestattung durch eine wissenschaftliche Einrichtung angemessen", 
        score: { organ: -1, body: 3 } 
      },
      { 
        text: "Ich habe darüber noch nicht nachgedacht", 
        score: { organ: 0, body: 0 } 
      }
    ]
  },
  {
    id: 4,
    text: "Wie wichtig ist Ihnen der direkte Nutzen für andere Menschen?",
    options: [
      { 
        text: "Sehr wichtig - ich möchte direkt Leben retten", 
        score: { organ: 3, body: -1 } 
      },
      { 
        text: "Wichtig, aber langfristiger Nutzen für viele ist auch wertvoll", 
        score: { organ: 1, body: 2 } 
      },
      { 
        text: "Ich möchte lieber zur Ausbildung zukünftiger Ärzte beitragen", 
        score: { organ: -1, body: 3 } 
      },
      { 
        text: "Dieser Aspekt ist für meine Entscheidung nicht ausschlaggebend", 
        score: { organ: 0, body: 0 } 
      }
    ]
  },
  {
    id: 5,
    text: "Wie stehen Sie zu dem Gedanken, dass Medizinstudierende an Ihrem Körper lernen?",
    options: [
      { 
        text: "Das finde ich unangenehm", 
        score: { organ: 1, body: -3 } 
      },
      { 
        text: "Das ist ein wichtiger Beitrag zur medizinischen Ausbildung", 
        score: { organ: 0, body: 3 } 
      },
      { 
        text: "Ich bevorzuge, dass nur meine Organe verwendet werden", 
        score: { organ: 2, body: -2 } 
      },
      { 
        text: "Ich habe keine starke Meinung dazu", 
        score: { organ: 0, body: 1 } 
      }
    ]
  }
];

const DecisionQuiz: React.FC<DecisionQuizProps> = ({ className }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({ organ: 0, body: 0 });
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  
  const handleAnswer = (optionIndex: number) => {
    const question = questions[currentQuestionIndex];
    const option = question.options[optionIndex];
    
    // Update scores
    setScores({
      organ: scores.organ + option.score.organ,
      body: scores.body + option.score.body
    });
    
    // Save answer
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setAnswers(newAnswers);
    
    // Move to next question or show result
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScores({ organ: 0, body: 0 });
    setShowResult(false);
    setAnswers([]);
  };
  
  const getResult = () => {
    if (scores.organ > scores.body + 2) {
      return {
        title: "Organspende könnte zu Ihnen passen",
        description: "Basierend auf Ihren Antworten könnten Sie sich mit dem Gedanken der Organspende wohler fühlen. Sie scheinen Wert darauf zu legen, direkt Leben zu retten und bevorzugen möglicherweise eine traditionellere Bestattung.",
        recommendation: "Informieren Sie sich über einen Organspendeausweis und sprechen Sie mit Ihren Angehörigen über Ihre Entscheidung."
      };
    } else if (scores.body > scores.organ + 2) {
      return {
        title: "Körperspende könnte zu Ihnen passen",
        description: "Ihre Antworten deuten darauf hin, dass Sie sich mit dem Gedanken der Körperspende wohlfühlen könnten. Sie scheinen Wert auf langfristigen Nutzen für die medizinische Ausbildung und Forschung zu legen.",
        recommendation: "Informieren Sie sich bei anatomischen Instituten über die Möglichkeiten der Körperspende."
      };
    } else {
      return {
        title: "Beide Optionen kommen für Sie in Frage",
        description: "Basierend auf Ihren Antworten könnten sowohl Organspende als auch Körperspende zu Ihnen passen. Sie scheinen offen für verschiedene Möglichkeiten zu sein.",
        recommendation: "Informieren Sie sich genauer über beide Optionen und wägen Sie ab, welche besser zu Ihren persönlichen Werten passt."
      };
    }
  };
  
  const result = getResult();
  const progress = ((currentQuestionIndex + (showResult ? 1 : 0)) / questions.length) * 100;
  
  return (
    <div className={cn("w-full max-w-2xl mx-auto", className)}>
      <div className="mb-6">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-right">
          {showResult ? "Ergebnis" : `Frage ${currentQuestionIndex + 1} von ${questions.length}`}
        </p>
      </div>
      
      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={`question-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center">
                  {questions[currentQuestionIndex].text}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3 px-4"
                      onClick={() => handleAnswer(index)}
                    >
                      {option.text}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-center text-blue-600 dark:text-blue-400">
                  {result.title}
                </CardTitle>
                <CardDescription className="text-center">
                  Basierend auf Ihren Antworten
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  {result.description}
                </p>
                <div className="flex justify-center gap-4 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      Organspende
                    </div>
                    <div className="mt-2 h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {Math.max(0, scores.organ)}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                      Körperspende
                    </div>
                    <div className="mt-2 h-24 w-24 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {Math.max(0, scores.body)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Empfehlung:</h4>
                  <p>{result.recommendation}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={resetQuiz}>
                  Quiz neu starten
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
        Hinweis: Dieses Quiz dient nur als erste Orientierung und ersetzt keine persönliche Beratung.
        Die endgültige Entscheidung sollte wohlüberlegt und nach ausführlicher Information getroffen werden.
      </p>
    </div>
  );
};

export default DecisionQuiz;
