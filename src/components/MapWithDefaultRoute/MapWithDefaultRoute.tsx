"use client";

import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 52.3555, // Center of England
  lng: -1.1743,
};

const mapOptions = {
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
  zoomControl: true,
};

export default function MapWithDefaultRoute() {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [originPosition, setOriginPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [destinationPosition, setDestinationPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const origin = "London, UK";
  const destination = "Manchester, UK";

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_DESTINATION_API_KEY!,
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded) return;

    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: origin }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const loc = results[0].geometry.location;
        setOriginPosition({ lat: loc.lat(), lng: loc.lng() });
      }
    });

    geocoder.geocode({ address: destination }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const loc = results[0].geometry.location;
        setDestinationPosition({ lat: loc.lat(), lng: loc.lng() });
      }
    });

    const distanceService = new google.maps.DistanceMatrixService();
    distanceService.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        if (status === "OK" && response?.rows[0]?.elements[0]?.status === "OK") {
          const element = response.rows[0].elements[0];
          setDistance(element.distance?.text ?? null);
          setDuration(element.duration?.text ?? null);
        }
      }
    );

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  }, [isLoaded]);

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div>
      {distance && duration && (
        <p className="mb-4 font-medium">
          🚗 Distance: {distance} — ⏱ Duration: {duration}
        </p>
      )}

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={
          originPosition && destinationPosition
            ? {
                lat: (originPosition.lat + destinationPosition.lat) / 2,
                lng: (originPosition.lng + destinationPosition.lng) / 2,
              }
            : defaultCenter
        }
        zoom={6}
        options={mapOptions}
      >
        {directions ? (
          <DirectionsRenderer directions={directions} />
        ) : (
          <>
            {originPosition && <Marker position={originPosition} />}
            {destinationPosition && <Marker position={destinationPosition} />}
          </>
        )}
      </GoogleMap>
    </div>
  );
}
