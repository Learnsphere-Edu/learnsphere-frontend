import { create } from 'zustand'

interface ChildProfileState {
  loading: boolean
  error: string | null
  first_name: string
  last_name: string
  date_of_birth: string
  gender: string
  avatar: string
  age: string | number
  primary_language: string
  secondary_languages?: string
  daiily_goal_minutes: string
  preferred_learning_time?: string
  last_activity?: string
  total_points?: number | null
  streak_days?: number | null

  setProfileData: (
    data: Partial<Omit<ChildProfileState, 'setProfileData' | 'resetProfile'>>
  ) => void
  setLoading: (loading: boolean) => void
  setError: (error: string) => void
  resetProfile: () => void
}

export const useProfileStore = create<ChildProfileState>(set => ({
  loading: false,
  error: null,
  first_name: '',
  last_name: '',
  date_of_birth: '',
  gender: '',
  avatar: '',
  primary_language: '',
  secondary_languages: '',
  daiily_goal_minutes: '',
  preferred_learning_time: '',
  last_activity: '',
  total_points: null,
  streak_days: null,
  age: '',

  setProfileData: data => set(state => ({ ...state, ...data })),

  resetProfile: () =>
    set({
      first_name: '',
      last_name: '',
      date_of_birth: '',
      age: '',
      gender: '',
      avatar: '',
      primary_language: '',
      secondary_languages: '',
      daiily_goal_minutes: '',
      preferred_learning_time: '',
      last_activity: '',
      total_points: null,
      streak_days: null
    }),

    setLoading: (loading) => set({loading}),
    setError: (error) => set({error})
}))
