import React, { useState } from 'react';

const Geolocation = () => {
  // State to store the address or error
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  // Success callback for geolocation
  const geoLocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    // Here, you can use a reverse geocoding API to get the address, 
    // but for now, we’ll just show the latitude and longitude
    setAddress(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  // Error callback for geolocation
  const geoLocationError = (err) => {
    setError(`Error: ${err.message}`);
  };

  // Function to trigger geolocation request
  const getAddress = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <h2>User Location</h2>
      <button onClick={getAddress}>Get Location</button>
      {address && <p>{address}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Geolocation;
