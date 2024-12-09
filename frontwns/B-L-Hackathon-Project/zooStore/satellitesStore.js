import { create } from 'zustand';

const useSatelliteStore = create((set) => ({
    satellites: [],
    currentSat: null,
    isLoading: false,
    error: null,
    setSatellites: (data) => set({ satellites: data, isLoading: false, error: null }),
    setCurrentSat: (satellite) => set({ currentSat: satellite, isLoading: false }),
    setLoading: () => set({ isLoading: true }),
    setError: (error) => set({ error, isLoading: false }),
    reset: () => set({ satellites: [], isLoading: false, error: null }),
}));

export default useSatelliteStore;

