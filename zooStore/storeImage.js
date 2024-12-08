import { create } from 'zustand';

const storeImage = create((set) => ({
  imageUrl: null,
  isImageReady: false,
  setImage: (url) => set({ imageUrl: url, isImageReady: true }),
  resetImage: () => set({ imageUrl: null, isImageReady: false }),
}));

export default storeImage;
