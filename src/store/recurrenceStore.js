import { create } from 'zustand';

export const useRecurrenceStore = create((set) => ({
  recurrence: {
    pattern: 'daily',
    startDate: new Date(),
  },
  setRecurrence: (recurrence) => set({ recurrence }),
}));
