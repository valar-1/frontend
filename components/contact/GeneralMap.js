import React from "react";
import markericon from "../../public/images/map-marker.png";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const options = {
  disableDefaultUI: false,
  draggable: true,
  keyboardShortcuts: false,
  scaleControl: true,
  scrollwheel: true,
  styles: [
    {
      featureType: "road",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "water",
      stylers: [{ color: "#e9e9e9" }],
    },
    {
      featureType: "landscape",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "transparent" }],
    },
    {
      featureType: "poi",
      stylers: [{ color: "#fefefe" }],
    },
    {
      elementType: "labels.text",
      stylers: [
        { saturation: 1 },
        { weight: 0.1 },
        { color: "#737980" },
      ],
    },
  ],
  icon: markericon,
};

const GeneralMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      options={options}
    >
      {/* add markers or other components here */}
    </GoogleMap>
  );
};

export default GeneralMap;
