// Utility to generate random questions from the question bank
// and convert them to the format expected by the existing UI

import { 
  selectRandomQuestions, 
  allQuestions,
  type ESGQuestion as BankQuestion 
} from '@/data/esgQuestionBank';
import { type Question } from '@/data/esgQuestions';

// Convert question bank format to UI format
export function convertBankQuestionToUIQuestion(bankQuestion: BankQuestion, index: number): Question {
  return {
    id: index + 1,
    type: bankQuestion.type === 'attachment' ? 'textarea' : bankQuestion.type,
    question: bankQuestion.question,
    questionZh: bankQuestion.questionZh,
    options: bankQuestion.options,
    optionsZh: bankQuestion.optionsZh,
    placeholder: bankQuestion.placeholder,
    placeholderZh: bankQuestion.placeholderZh,
    category: bankQuestion.category === 'environmental' ? 'environment' : 
              bankQuestion.category === 'social' ? 'social' : 'governance',
  };
}

// Generate random questions for assessment (15 questions)
export function generateRandomAssessment(): Question[] {
  const bankQuestions = selectRandomQuestions({
    environmental: 6,
    social: 6,
    governance: 3
  });
  
  return bankQuestions.map((q, index) => convertBankQuestionToUIQuestion(q, index));
}

// Get all questions (for full assessment - 42 questions)
export function getAllQuestions(): Question[] {
  return allQuestions.map((q, index) => convertBankQuestionToUIQuestion(q, index));
}

// Generate questions with specific counts per category
export function generateCustomAssessment(counts: {
  environmental: number;
  social: number;
  governance: number;
}): Question[] {
  const bankQuestions = selectRandomQuestions(counts);
  return bankQuestions.map((q, index) => convertBankQuestionToUIQuestion(q, index));
}

