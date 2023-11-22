import { create } from 'zustand';
import { getFirebase } from '../services/fetchDatabase';

export const useLabsStore = create((set, get) => {
  return {
    labs: [],
    loading: false,

    fetchLabs: async () => {
      set({ loading: true });
      const labs = await getFirebase();
      set({ labs, loading: false });
    },
  };
});
