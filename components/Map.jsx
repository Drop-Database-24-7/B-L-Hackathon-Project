import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

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
      zoom={6}
      style={{ height: '100vh', width: '100%' }}
      className="z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {hasLocation && (
        <Marker position={position}>
          <Popup>Twoja aktualna lokalizacja</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
