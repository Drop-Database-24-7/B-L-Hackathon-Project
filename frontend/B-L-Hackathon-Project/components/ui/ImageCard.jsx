import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ImageCard = React.forwardRef(({ imageUrl, altText, className, ...props }, ref) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div ref={ref} className={cn("relative rounded-lg overflow-hidden border bg-card shadow-sm", className)} {...props}>
      <img src={imageUrl} alt={altText} className="object-cover w-full h-full" />
      <Button
        onClick={openModal}
        className="absolute bottom-4 left-4 z-20 bg-black text-white opacity-80"
      >
        View Larger
      </Button>

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
    <div className="relative p-0 rounded-lg max-w-full max-h-full overflow-auto">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-contain max-w-[100vw] max-h-[100vh]"
      />
      <Button
        onClick={closeModal}
        className="absolute top-2 right-2 bg-black text-white hover:opacity-100"
      >
        Close
      </Button>
    </div>
  </div>
)}
    </div>
  );
});

ImageCard.displayName = "ImageCard";

export { ImageCard };
