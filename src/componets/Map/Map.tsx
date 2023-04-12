import React from "react";
import "./Map.css";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const defaultProps = {
    center: {
      lng: -73.9442,
      lat: 40.6782,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "80vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBTm8721xKcgpvNITI9IKlGJOKm4zANQNM" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
