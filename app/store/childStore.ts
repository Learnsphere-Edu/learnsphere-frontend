// stores/childStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Child = {
  id: string;
  name: string;
  age: number;
  avatar?: string;
};

type ChildState = {
  selectedChild: Child | null;
  setSelectedChild: (child: Child) => void;
  clearSelectedChild: () => void;
};

export const useChildStore = create<ChildState>()(
  persist(
    (set) => ({
      selectedChild: null,
      setSelectedChild: (child) => set({ selectedChild: child }),
      clearSelectedChild: () => set({ selectedChild: null }),
    }),
    {
      name: 'selected-child',
    }
  )
);
