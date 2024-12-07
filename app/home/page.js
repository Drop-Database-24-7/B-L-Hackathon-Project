"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox } from "@/components/ui/Combobox";
import { Button } from "@/components/ui/button";
// import Map from "@/components/Map";
import { Slider } from "@/components/ui/slider";
import MapComponent from "@/components/MapComponent";
import { ImageCard } from "@/components/ui/ImageCard";

export default function Home() {
  return (
    <div className="relative">
      
      <Card className="absolute top-6 right-4 p-4 z-40 bg-black bg-opacity-80 border border-gray-300 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Satelite Chooser</CardTitle>
        </CardHeader>
        <CardContent>
          <Combobox />
        </CardContent>
        <CardFooter>
          <Button variant="outline">Show</Button>
        </CardFooter>
      </Card>

      {/* Centered Slider Card */}
      <Card className="absolute z-20 w-full bottom-0" >
        <CardContent className='p-4'>
          <Slider />
        </CardContent>
      </Card>

      {/* Map Component */}
      <MapComponent/>

      {/* ImageCard in the bottom right corner */}
      <ImageCard
        imageUrl="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg" 
        altText="Opis obrazu" 
        className="absolute bottom-14 right-4 z-40 w-64 h-64 rounded-lg shadow-lg"
      />
    </div>
  );
}
