import React, { useState } from 'react';

const Geolocation = () => {
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const geoLocationSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    setAddress(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const geoLocationError = (err) => {
    setError(`Error: ${err.message}`);
  };

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
