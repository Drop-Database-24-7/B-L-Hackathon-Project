import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import L from 'leaflet';
import { useMap } from 'react-leaflet';
import useLocationStore from '@/zooStore/store';
import useSatelliteStore from '@/zooStore/satellitesStore';
import { getImage } from '@/features/get';
import useStoreImage from "@/zooStore/storeImage";

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [position, setPosition] = useState([52.0943, 19.4565]);
  const [hasLocation, setHasLocation] = useState(false);
  const [hasCentered, setHasCentered] = useState(false);
  const { setLocation } = useLocationStore();
  const { satellites } = useSatelliteStore();

  const { isImageReady, imageUrl, setImage } = useStoreImage();
  const { currentSat, sattellites, setSatellites } = useSatelliteStore();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const coords = [latitude, longitude];
          setPosition(coords);
          setHasLocation(true);
          setLocation(coords);
          console.log("Lokalizacja wysłana do Zustand:", coords);
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
  }, [setLocation]);

  const customIcon = new L.Icon({
    iconUrl: 'https://www.seekpng.com/png/full/10-109643_red-eye-glow-png-graphic-stock-circle.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
    shadowUrl: 'https://www.seekpng.com/png/full/10-109643_red-eye-glow-png-graphic-stock-circle.png',
    shadowSize: [32, 32],
    shadowAnchor: [16, 32],
  });

  const satelliteIcon = new L.Icon({
    iconUrl: 'https://pngimg.com/d/satellite_PNG15.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const CenterMapOnLocation = () => {
    const map = useMap();
    useEffect(() => {
      if (hasLocation && !hasCentered) {
        map.setView(position, 5, { animate: true });
        setHasCentered(true);
      }
    }, [position, hasLocation, hasCentered, map]);

    return null;
  };

  const handleSatelliteClick = async (satelliteId) => {
    const imageData = await getImage(satelliteId);
    setImage(imageData);
  };

  return (
    <MapContainer
      center={position}
      zoom={3}
      style={{ height: '100vh', width: '100%' }}
      className="z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CenterMapOnLocation />
      {hasLocation && (
        <Marker position={position} icon={customIcon}>
          <Popup>Your location</Popup>
        </Marker>
      )}

      {/* Render satellites on the map */}
      {satellites?.above?.map((satellite) => (
        <Marker
          key={satellite.satid}
          position={[satellite.satlat, satellite.satlng]}
          icon={satelliteIcon}
          eventHandlers={{
            click: () => handleSatelliteClick(satellite.satid),
          }}
        >
          <Popup>{satellite.satname}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
