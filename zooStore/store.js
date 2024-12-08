import { create } from 'zustand';

const useLocationStore = create((set) => ({
    location: null,
    isReady: false,
    setLocation: (coords) => set({ location: coords, isReady: true }),
    reset: () => set({ location: null, isReady: false }),
}));

export default useLocationStore;
