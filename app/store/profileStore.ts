import { create } from 'zustand'

interface ChildProfileState {
  loading: boolean
  error: string | null
  parent: number | null
  first_name: string
  last_name: string
  date_of_birth: string
  gender: string
  avatar: string
  primary_language: string
  secondary_languages?: string
  daiily_goal_minutes: number | null
  preferred_learning_time?: string
  last_activity?: string
  total_points?: number | null
  streak_days?: number | null

  setProfileData: (
    data: Partial<Omit<ChildProfileState, 'setProfileData' | 'resetProfile'>>
  ) => void

  resetProfile: () => void
}

export const useProfileStore = create<ChildProfileState>(set => ({
  loading: false,
  error: null,
  parent: null,
  first_name: '',
  last_name: '',
  date_of_birth: '',
  gender: '',
  avatar: '',
  primary_language: '',
  secondary_languages: '',
  daiily_goal_minutes: null,
  preferred_learning_time: '',
  last_activity: '',
  total_points: null,
  streak_days: null,

  setProfileData: data => set(state => ({ ...state, ...data })),

  resetProfile: () =>
    set({
      parent: null,
      first_name: '',
      last_name: '',
      date_of_birth: '',
      gender: '',
      avatar: '',
      primary_language: '',
      secondary_languages: '',
      daiily_goal_minutes: null,
      preferred_learning_time: '',
      last_activity: '',
      total_points: null,
      streak_days: null
    })
}))
