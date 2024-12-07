import { create } from 'zustand';

// MOJE ŚMIECI NIE UŻYWAĆ TEGO ZOOSTAND

const useSatelliteStore = create((set) => ({
  satellites: [
    { id: 1, name: 'Satellite 1', position: [52.2320, 20.9760] },
    { id: 2, name: 'Satellite 2', position: [52.2361, 20.9720] },
    { id: 3, name: 'Satellite 3', position: [52.1143, 20.8765] }
  ],
  setSatellites: (newSatellites) => set({ satellites: newSatellites }),
}));

export default useSatelliteStore;
