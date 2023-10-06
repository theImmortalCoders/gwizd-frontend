import { CircleF, GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
const GwizdMap = (props: { reports: Array<AnimalReport> }) => {
  const reports = props.reports;
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );
  const mapCenter = useMemo(() => ({ lat: 50.0678693, lng: 19.9916377 }), []);

  return (
    <GoogleMap
      options={mapOptions}
      zoom={12}
      center={mapCenter}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      mapContainerStyle={{ width: "100vw", height: "90vh" }}
    >
      {reports.map((rep: AnimalReport) => {
        return (
          <CircleF
            center={{
              lat: parseFloat(rep.location.latitude),
              lng: parseFloat(rep.location.longitude),
            }}
            radius={1000}
            options={{
              fillColor: rep.reportType === "DANGER" ? "red" : "blue",
              strokeColor: rep.reportType === "DANGER" ? "red" : "blue",
              strokeOpacity: 0.1,
            }}
          />
        );
      })}
    </GoogleMap>
  );
};
export default GwizdMap;
