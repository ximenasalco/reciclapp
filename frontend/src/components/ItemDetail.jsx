import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ItemDetail({ item }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow">
      {/* Información a la izquierda */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-green-700 mb-4">{item.name}</h2>
        <p className="mb-2">
          <strong>Material:</strong> {item.category}
        </p>
        <p className="mb-2">
          <strong>Descripción:</strong> {item.description}
        </p>
        <p className="mb-2">
          <strong>Cómo reciclar:</strong> {item.recyclingInfo}
        </p>
        <p className="mb-2">
          <strong>Impacto ambiental:</strong> {item.impact}
        </p>
      </div>

      {/* Mapa a la derecha */}
      <div className="flex-1 h-80 md:h-96 rounded-xl overflow-hidden">
        <MapContainer
          center={item.centers[0].coords}
          zoom={13}
          className="h-full w-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {item.centers.map((center, index) => (
            <Marker key={index} position={center.coords}>
              <Popup>{center.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
