"use client";
import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { getActiveReports } from "@/data/reportData";
import GwizdMap from "./components/map";

const Neighbourhood = () => {
  const [reports, setReports] = useState([]);
  const libraries = useMemo(() => ["places"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyATXEtRMP-Yn6KCPDpHTm5CTiYZI5qWqGc",
    libraries: libraries as any,
  });

  useEffect(() => {
    getActiveReports(setReports);
  }, []);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <GwizdMap reports={reports} />
    </div>
  );
};

export default Neighbourhood;
