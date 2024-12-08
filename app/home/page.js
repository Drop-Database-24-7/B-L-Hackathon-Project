"use client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox } from "@/components/ui/Combobox";
import { Button } from "@/components/ui/button";
import MapComponent from "@/components/MapComponent";
import { getImage, getSatellites } from "@/features/get";
import { ImageCard } from "@/components/ui/ImageCard";
import useLocationStore from "@/zooStore/store";
import { useEffect, useState } from "react";
import useSatelliteStore from "@/zooStore/satellitesStore";
import useStoreImage from "@/zooStore/storeImage";

const StatusDisplay = () => {
  const { location, isReady } = useLocationStore();
  const { sattellites, setSatellites } = useSatelliteStore();

  useEffect(() => {
    if (isReady && location) {
      const fetchSatellites = async () => {
        console.log("Fetching satellites...");
        const data = await getSatellites(location[0], location[1]);
        setSatellites(data);
      };
      fetchSatellites();
    }
  }, [isReady, setSatellites]);

  return (
    <Card className="absolute bottom-6 left-4 z-10 p-0 bg-black text-white bg-opacity-80 border border-gray-300 rounded-lg shadow-lg">
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
  const { isImageReady, imageUrl, setImage } = useStoreImage();
  const { currentSat, sattellites } = useSatelliteStore();
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [satInfo, setSatInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleShowClick = async () => {
    console.log(currentSat);

    try {
      setLoading(true);

      const imgData = await getImage(currentSat);
      setImage(imgData);

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer {copy_your_key_here}` //its in a file ignored by git
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a helpful assistant providing satellite information." },
            { role: "user", content: `Provide short information about the satellite: ${currentSat}.` }
          ]
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSatInfo(data.choices[0].message.content);
      } else {
        console.error("Failed to fetch satellite information.");
        setSatInfo("Error fetching satellite information.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSatInfo("Error fetching satellite information.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <Card className="absolute top-6 right-4 p-4 z-40 bg-black text-black bg-opacity-80 border border-gray-300 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Satellite Chooser</CardTitle>
        </CardHeader>
        <CardContent>
          <Combobox />
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={handleShowClick}>
            Show
          </Button>
        </CardFooter>
      </Card>

      <MapComponent />

      {isImageReady && (
        <ImageCard
          imageUrl={imageUrl}
          altText="Opis obrazu"
          className="absolute bottom-6 right-4 z-40 w-64 h-64 rounded-lg shadow-lg"
        />
      )}

      <StatusDisplay />

      <Card className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 bg-black text-white bg-opacity-80 border border-black-300 rounded-lg shadow-lg">
        <CardHeader
          className="flex justify-between items-center cursor-pointer p-4"
          onClick={() => setInfoVisible(!isInfoVisible)}
        >
          <CardTitle>Satellite Info</CardTitle>
          <Button variant="ghost" className="text-white">
            {isInfoVisible ? "▼" : "▲"}
          </Button>
        </CardHeader>
        {isInfoVisible && (
          <CardContent>
            {loading ? (
              <p>Loading satellite information...</p>
            ) : (
              <p><strong>Information:</strong> {satInfo || "Satellite not chosen."}</p>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}
