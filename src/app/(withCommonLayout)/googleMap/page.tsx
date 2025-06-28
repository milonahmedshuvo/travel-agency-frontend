// "use client"

// import React, { useEffect, useState } from "react";
// import {
//   GoogleMap,
//   useLoadScript,
//   Marker,
//   DirectionsRenderer,
// } from "@react-google-maps/api";
// // import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";


// // import {
// //   resetAllFields,
// //   updateBulkFields,
// // } from "@/redux/features/bookingSlice";


// // import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";
 
// const containerStyle = {
//   width: "100%",
//   height: "350px",
// };
 
// const center = {
//   lat: 51.5074, // Default center: London
//   lng: -0.1278,
// };
 
// type MapWithDistanceProps = {
//   origin: string; // e.g., "Southall, UK"
//   destination: string; // e.g., "Orpington, UK"
//   setDistanceKm: (value: number | null) => void;
//   distanceKm: number;
//   setDistanceMiles: (value: number | null) => void;
//   distanceMiles: number;
//   setDurationText: (value: string | null) => void;
//   durationText: string;
// };
 

// const mapOptions = {
//   mapTypeControl: false,
//   fullscreenControl: false,
//   streetViewControl: false,
//   zoomControl: true,
// };
 



// export default function MapWithDistance({
//   origin,
//   destination,
//   setDistanceKm,
//   distanceKm,
//   setDistanceMiles,
//   distanceMiles,
//   setDurationText,
//   durationText,
// }: MapWithDistanceProps) {

//   const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
//   const router = useRouter();
 


// //   console.log(origin.split(","));
 
//   const [originPosition, setOriginPosition] = useState<google.maps.LatLngLiteral | null>(null);
//   const [destinationPosition, setDestinationPosition] = useState<google.maps.LatLngLiteral | null>(null);



// //   const {
// //     distanceByKM,
// //     distanceMiles: distanceM,
// //     durationText: time,
// //   } = useAppSelector((state) => state.booking);



// const {
//   distanceByKM = 560,
//   distanceM = 220,
//   duration: time = '',
// } = useAppSelector((state) => state.booking || {});

 



//   const dispatch = useAppDispatch();
 
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_DESTINATION_API_KEY as string,
//     libraries: ["places"],
//   });
 




//   useEffect(() => {
//     if (!origin || !destination || !isLoaded) return;
 
//     // 1. Get the lat/lng for origin and destination
//     const geocoder = new window.google.maps.Geocoder();
 
//     // const country = origin.split(",");
//     // console.log(country[country.length - 1]);
 
//     // if (country[country.length - 1]?.trim() !== "Greece") {
//     //   Swal.fire({
//     //     title: "Service not available",
//     //     confirmButtonText: "OK", // Only OK button
//     //   }).then(() => {
//     //     // Redirect to home page after clicking "OK"
//     //     dispatch(resetAllFields());
//     //     router.push("/");
//     //   });
//     //   return;
//     // }
//     // Geocode origin
//     geocoder.geocode({ address: origin }, (results, status) => {
//       if (status === "OK" && results && results[0]) {
//         const location = results[0].geometry.location;
//         setOriginPosition({
//           lat: location.lat(),
//           lng: location.lng(),
//         });
 
//         // Extract country from address components
//         const addressComponents = results[0].address_components;
//         const countryComponent = addressComponents.find((component) =>
//           component.types.includes("country")
//         );
//         if (countryComponent && countryComponent.long_name !== "Greece") {


//         //   Swal.fire({
//         //     title: "Service not available",
//         //     confirmButtonText: "OK", // Only OK button
//         //   }).then(() => {
//         //     dispatch(resetAllFields());
//         //     router.push("/");
//         //   });
//         //   return;


//         }
//       } else {
//         console.error("Geocode origin failed:", status);
//       }
//     });
 
//     // Geocode destination
//     geocoder.geocode({ address: destination }, (results, status) => {
//       if (status === "OK" && results && results[0]) {
//         const location = results[0].geometry.location;
//         setDestinationPosition({
//           lat: location.lat(),
//           lng: location.lng(),
//         });
//       } else {
//         console.error("Geocode destination failed:", status);
//       }
//     });
 
//     // 2. Distance Matrix Service
//     const service = new window.google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//       {
//         origins: [origin],
//         destinations: [destination],
//         travelMode: google.maps.TravelMode.DRIVING,
//         unitSystem: google.maps.UnitSystem.METRIC,
//       },
//       (response, status) => {
//         if (
//           status === "OK" &&
//           response &&
//           response.rows[0].elements[0].status === "OK"
//         ) {
//           const element = response.rows[0].elements[0];
//           const distMeters = element.distance?.value ?? 0;
//           const duration = element.duration?.text ?? "";
 
//           const km = distMeters / 1000;
//           const miles = km * 0.621371;
 
//         //   if (!km) {  
//         //     Swal.fire({
//         //       title: "Service not available",
//         //       confirmButtonText: "OK", // Only OK button
//         //     }).then(() => {
//         //       // Redirect to home page after clicking "OK"
//         //       dispatch(resetAllFields());
//         //       router.push("/");
//         //     });
//         //     return;
//         //   }
 
//           // Prevent unnecessary re-rendering
//           if (distanceByKM !== km || distanceM !== miles || time !== duration) {

//             // dispatch(
//             //   updateBulkFields({
//             //     distanceByKM: km,
//             //     distanceMiles: miles,
//             //     durationText: duration,
//             //   })
//             // );
 
//             setDistanceKm(km);
//             setDistanceMiles(miles);
//             setDurationText(duration);
//           }
//         } else {
//           console.error("DistanceMatrix error:", status);
//         }
//       }
//     );
 
//     // 3. Directions Service
//     const directionsService = new window.google.maps.DirectionsService();
//     directionsService.route(
//       {
//         origin,
//         destination,
//         travelMode: google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === "OK" && result) {
//           setDirections(result);
//         } else {
//           console.error("Directions request failed:", status);
//         }
//       }
//     );
//   }, [
//     origin,
//     destination,
//     isLoaded,
//     dispatch,
//     distanceByKM,
//     distanceM,
//     time,
//     setDistanceKm,
//     setDistanceMiles,
//     setDurationText,
//     router,
//   ]);
 
//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading Maps...</div>;
 
//   return (
//     <div className="my-20">
//       {/* Distance and duration info */}
//       {distanceKm !== null &&
//         distanceMiles !== null &&
//         durationText !== null && (
//           <div style={{ marginBottom: "1rem", display: "none" }}>
//             <p>
//               Distance: {distanceKm?.toFixed(2)} km / {distanceMiles?.toFixed(2)}{" "}
//               miles — Time: {durationText}
//             </p>
//           </div>
//         )}
 
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={
//           originPosition && destinationPosition
//             ? {
//                 lat: (originPosition.lat + destinationPosition.lat) / 2,
//                 lng: (originPosition.lng + destinationPosition.lng) / 2,
//               }
//             : center
//         } // Center on both if available, otherwise use the default center
//         zoom={10}
//         options={mapOptions}
//       >
//         {/* Show route */}
//         {directions ? (
//           <DirectionsRenderer directions={directions} />
//         ) : (
//           <>
//             {/* Markers if no directions yet */}
//             {originPosition && <Marker position={originPosition} />}
//             {destinationPosition && <Marker position={destinationPosition} />}
//           </>
//         )}
//       </GoogleMap>
//     </div>
//   );
// }
 
 