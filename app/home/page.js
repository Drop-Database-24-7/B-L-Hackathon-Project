"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox } from "@/components/ui/Combobox";
import { Button } from "@/components/ui/button";
import Map from "@/components/Map";

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

      {/* Map Component */}
      <Map />
    </div>
  );
}
