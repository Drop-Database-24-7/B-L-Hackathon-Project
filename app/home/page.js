"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox } from "@/components/ui/Combobox";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import  MapComponent from "@/components/MapComponent";
import { getSatellites }  from '@/features/post'
import { ImageCard } from "@/components/ui/ImageCard";
import useLocationStore from "@/zooStore/store";
import { useEffect, useState } from "react";
import useSatelliteStore from "@/zooStore/satellitesStore";



const StatusDisplay = () => {
  const { location, isReady } = useLocationStore();
  
    

  return (
    <Card className="absolute bottom-14 left-4 z-40 p-0 bg-black text-white bg-opacity-80 border border-gray-300 rounded-lg shadow-lg">
      <CardHeader>
        <CardTitle>Status</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Location:</strong> {location ? `${location[0]}, ${location[1]}` : "Unknown"}</p>
        <p><strong>Status:</strong> {isReady ? "Ready" : "Not Ready"}</p>
      </CardContent>
    </Card>
  );
};

export default function Home() {


    const { sattellites, setSatellites } = useSatelliteStore()
    const onSubmit = async () => {
      console.log("Hello From Submit");
      const data = await getSatellites(52.0943, 19.4565);
      setSatellites(data)
    }


  return (
    <div className="relative">
      {/* Satelite Chooser */}
      <Card className="absolute top-6 right-4 p-4 z-40 bg-black bg-opacity-80 border border-gray-300 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Satelite Chooser</CardTitle>
        </CardHeader>
        <CardContent>
          <Combobox />
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={onSubmit}>Show</Button>
        </CardFooter>
      </Card>

      {/* Centered Slider Card */}
      <Card className="absolute z-20 w-full bottom-0">
        <CardContent className="p-4">
          <Slider />
        </CardContent>
      </Card>

      {/* Map Component */}
      <MapComponent />

      <ImageCard
        imageUrl="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg"
        altText="Opis obrazu"
        className="absolute bottom-14 right-4 z-40 w-64 h-64 rounded-lg shadow-lg"
      />

      <StatusDisplay/>
    </div>
  );
}
