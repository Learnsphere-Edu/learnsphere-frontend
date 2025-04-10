import { create } from 'zustand'
type Question = {
  word: string
  options: {
    image: string
    answer: string
  }
  correctAnswer: string
}

interface QuestionState {
  questions: Question[] | null
  isCorrect: boolean
  setIsCorrect: (isCorrect: boolean) => void
  setQuestions: (questions: Question[]) => void
  clearQuestions: () => void
}

export const useQuestionStore = create<QuestionState>(set => ({
  questions: null,
  setQuestions: questions => set({ questions }),
  isCorrect: false,
  setIsCorrect: isCorrect => set({ isCorrect }),
  clearQuestions: () =>
    set({
      questions: null,
      isCorrect: false
    })
}))
