import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";

const iconUbicate = new leaflet.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [20, 20],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

const latitude = {
  x: 3.43722,
  y: -76.5225,
};

const Map = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <MapContainer
        className="w-[50rem] h-[20rem]"
        center={[latitude.x, latitude.y]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude.x, latitude.y]} icon={iconUbicate}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
