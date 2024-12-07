"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

import 'leaflet/dist/leaflet.css';

const Map = () => {
    const [position, setPosition] = useState([52.0943, 19.4565]);
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
          console.log(latitude + " " + longitude)
          setHasLocation(true);
        },
        (error) => {
          console.error("Błąd pobierania lokalizacji:", error);
          setHasLocation(false);
        }
      );
    } else {
      console.log("Geolokalizacja nie jest dostępna w tej przeglądarce.");
      setHasLocation(false);
    }
  }, []);

  const customIcon = new L.Icon({
    iconUrl: 'https://www.seekpng.com/png/full/10-109643_red-eye-glow-png-graphic-stock-circle.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    shadowUrl: 'https://www.seekpng.com/png/full/10-109643_red-eye-glow-png-graphic-stock-circle.png',
    shadowSize: [32, 32],
    shadowAnchor: [16, 32],
  });

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '100vh', width: '100%' }}
      className="z-10"
      whenCreated={(map) => {
        if (hasLocation) {
          map.setView(position, 16, { animate: true });
        }
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {hasLocation && (
        <Marker position={position} icon={customIcon}>
          <Popup>Your location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
