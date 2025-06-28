"use client";

import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 45.1, // Center of Croatia
  lng: 15.2,
};

const croatiaPlaces = [
  { name: "Zagreb", position: { lat: 45.815, lng: 15.9819 } },
  { name: "Split", position: { lat: 43.5081, lng: 16.4402 } },
  { name: "Dubrovnik", position: { lat: 42.6507, lng: 18.0944 } },
  { name: "Rijeka", position: { lat: 45.3271, lng: 14.4422 } },
  { name: "Pula", position: { lat: 44.8666, lng: 13.8496 } },
];

export default function MapWithCroatiaMarkers() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string,
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="custom-container" > 
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
    >
      {croatiaPlaces.map((place, idx) => (
        <Marker key={idx} position={place.position} title={place.name} />
      ))}
    </GoogleMap>
    </div>
  );
}
