import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapContainer.css";

const MapComponent = ({ lat, long }) => {
  let position2 = [lat, long];

  useEffect(() => {}, []);
  return (
    <div className="map-container">
      {position2.length && (
        <MapContainer
          className="main"
          center={position2}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={position2}>
            <Popup>
              Welcome to. <br /> London.
            </Popup>
          </Marker>
        </MapContainer>
      )}
      <div className="lat-long">
        <span>
          Lat: <strong>{lat}</strong>{" "}
        </span>
        <span>
          Long:<strong>{long}</strong>{" "}
        </span>
      </div>
    </div>
  );
};
export default MapComponent;
