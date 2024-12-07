"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox } from "@/components/ui/Combobox";
import { Button } from "@/components/ui/button";
// import Map from "@/components/Map";
import { Slider } from "@/components/ui/slider";
import  MapComponent from "@/components/MapComponent";

export default function Home() {
  return (
    <div className="relative">
      
      <Card className="absolute top-4 right-4 p-4 z-40 bg-white bg-opacity-80 border border-gray-300 rounded-lg shadow-lg">
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
      {/* <Card className="absolute bottom-14 left-1/2 transform -translate-x-1/2 p-4 z-40 bg-white bg-opacity-80 border border-gray-300 rounded-lg shadow-lg"> */}
      <Card className="absolute z-20 w-full bottom-0" >
        <CardContent className='p-4'>
          <Slider />
        </CardContent>
      </Card>

      {/* Map Component */}
      {/* <Map /> */}
      {/* <Map/> */}
      <MapComponent/>
      </div>
  );
}
