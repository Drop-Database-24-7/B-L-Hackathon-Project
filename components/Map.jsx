"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });
const Circle = dynamic(() => import('react-leaflet').then((mod) => mod.Circle), { ssr: false });

import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const Map = () => {
  const [position, setPosition] = useState([52.2297, 21.0122]);
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
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
        <Marker position={position}>
          <Popup>Your location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
