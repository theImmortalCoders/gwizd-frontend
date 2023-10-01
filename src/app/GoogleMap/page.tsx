"use client";
import {
  CircleF,
  GoogleMap,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const Home: NextPage = () => {
  const [reps, setReps] = useState<any[]>([]);
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: 50.0678693, lng: 19.9916377 }), []);
  const map1 = useMemo(() => ({ lat: 50.0678693, lng: 19.9916377 }), []);
  const map2 = useMemo(() => ({ lat: 50.0678693, lng: 19.9916377 }), []);

  const getAlertLocation = async () => {
    const response = await fetch("http://localhost:8080/api/report");
    const reports = await response.json();
    console.log(reports);
    setReps(
      reports.map((rep: any) => {
        return {
          repType: rep.reportType,
          location: { lat: rep.location.latitude, lng: rep.location.longitude },
        };
      })
    );
  };

  useEffect(() => {
    getAlertLocation();
  }, []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyATXEtRMP-Yn6KCPDpHTm5CTiYZI5qWqGc",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={12}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100vw", height: "90vh" }}
      >
        {reps.map((rep) => {
          console.log(rep);
          return (
            <CircleF
              center={rep.location}
              radius={800}
              options={{
                fillColor: rep.repType === "DANGER" ? "red" : "blue",
                strokeColor: rep.repType === "DANGER" ? "red" : "blue",
                strokeOpacity: 0.1,
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export default Home;
