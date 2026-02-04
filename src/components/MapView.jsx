import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const blueIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png",
  iconSize: [32, 32],
});

const redIcon = new L.Icon({
  iconUrl: "https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png",
  iconSize: [32, 32],
});

export default function MapView({ rows, selectedId, onSelect }) {
  return (
    <MapContainer center={[20, 78]} zoom={4} style={{ height: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {rows.map((row) => (
        <Marker
          key={row.id}
          position={[row.latitude, row.longitude]}
          icon={row.id === selectedId ? redIcon : blueIcon}
          eventHandlers={{
            click: () => onSelect(row.id),
          }}
        >
          <Popup>{row.projectName}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
