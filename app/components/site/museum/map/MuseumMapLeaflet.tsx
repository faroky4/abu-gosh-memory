"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { mapPlaces, type MapPlace } from "@/data/mapPlaces";

function createPin(active: boolean): L.DivIcon {
  return L.divIcon({
    className: "",
    html: `<span style="
      display:block;
      width:52px;height:52px;
      background:${active ? "#d97706" : "#78350f"};
      border:4px solid ${active ? "#fbbf24" : "#b45309"};
      border-radius:50%;
      box-shadow:0 4px 18px rgba(0,0,0,0.7);
    "></span>`,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });
}

export default function MuseumMapLeaflet({
  onSelect,
  selectedId,
}: {
  onSelect: (place: MapPlace) => void;
  selectedId: string | null;
}) {
  const center: [number, number] = [31.808, 35.1068];

  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {mapPlaces.map((place) => (
        <Marker
          key={place.id}
          position={[place.lat, place.lng]}
          icon={createPin(place.id === selectedId)}
          eventHandlers={{ click: () => onSelect(place) }}
        />
      ))}
    </MapContainer>
  );
}
