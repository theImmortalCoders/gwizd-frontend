"use client";
import styles from "./page.module.css";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyATXEtRMP-Yn6KCPDpHTm5CTiYZI5qWqGc",
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="mapContainer"
    >
      {/* Dodaj tutaj Marker lub inne elementy mapy, jeśli są potrzebne */}
    </GoogleMap>
  );
}
