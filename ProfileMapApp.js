import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const profiles = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://via.placeholder.com/100",
    description: "Software Engineer",
    location: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://via.placeholder.com/100",
    description: "Product Manager",
    location: { lat: 40.7128, lng: -74.006 },
  },
];

export default function ProfileMapApp() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile List</h1>
      {profiles.map((profile) => (
        <div key={profile.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0" }}>
          <img src={profile.photo} alt={profile.name} style={{ width: "50px", borderRadius: "50%" }} />
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
          <button onClick={() => setSelectedProfile(profile)}>Show on Map</button>
        </div>
      ))}

      {selectedProfile && (
        <div style={{ marginTop: "20px" }}>
          <h2>Location of {selectedProfile.name}</h2>
          <MapContainer
            center={[selectedProfile.location.lat, selectedProfile.location.lng]}
            zoom={13}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[selectedProfile.location.lat, selectedProfile.location.lng]}>
              <Popup>{selectedProfile.name}'s Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}
