import { create } from 'zustand';

const useSatelliteStore = create((set) => ({
    satellites: [],
    currentSat: [],
    isLoading: false,
    error: null,
    setSatellites: (data) => set({ satellites: data, isLoading: false, error: null }),
    setCurrentSat: (data) => set({ currentSat: data, isLoading: false, error: null }),
    setLoading: () => set({ isLoading: true }),
    setError: (error) => set({ error, isLoading: false }),
    reset: () => set({ satellites: [], isLoading: false, error: null }),
}));

export default useSatelliteStore;
