"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
})

// Custom icons
const safeZoneIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/emoji/48/check-mark-emoji.png",
  iconSize: [32, 32],
})

const foodShelterIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/color/48/restaurant.png",
  iconSize: [32, 32],
})

const medicalCampIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/color/48/hospital.png", // Reliable hospital icon
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Adjusting anchor point
  popupAnchor: [0, -32], // Popup positioning
})


const sosIcon = new L.Icon({
  iconUrl: "https://img.icons8.com/fluency/48/sos.png",
  iconSize: [40, 40],
})

const Map = () => {
  const [mapData, setMapData] = useState({
    safeZones: [],
    foodShelters: [],
    medicalCamps: [],
    floodLevels: [],
    sosAlerts: [],
  })
  const [showFloodLevels, setShowFloodLevels] = useState(false)

  useEffect(() => {
    // Simulated data fetching (Replace with actual API call)
    const fetchMapData = async () => {
      const data = {
        safeZones: [
          { id: 1, lat: 13.085, lng: 80.27, name: "Safe Zone 1" },
          { id: 2, lat: 13.09, lng: 80.275, name: "Safe Zone 2" },
        ],
        foodShelters: [
          { id: 1, lat: 13.08, lng: 80.26, name: "Food Shelter 1" },
          { id: 2, lat: 13.075, lng: 80.285, name: "Food Shelter 2" },
          { id: 3, lat: 13.07, lng: 80.295, name: "Food Shelter 3" },
          { id: 4, lat: 13.065, lng: 80.275, name: "Food Shelter 4" },
        ],
        medicalCamps: [
          { id: 1, lat: 13.082, lng: 80.28, name: "Medical Camp 1" },
          { id: 2, lat: 13.085, lng: 80.29, name: "Medical Camp 2" },
          { id: 3, lat: 13.075, lng: 80.26, name: "Medical Camp 3" },
          { id: 4, lat: 13.07, lng: 80.25, name: "Medical Camp 4" },
          { id: 5, lat: 13.09, lng: 80.265, name: "Medical Camp 5" },
          { id: 6, lat: 13.06, lng: 80.255, name: "Medical Camp 6" },
          { id: 7, lat: 13.1, lng: 80.27, name: "Medical Camp 7" },
        ],
        floodLevels: [
          { id: 1, lat: 13.08, lng: 80.27, level: 0.4 },
          { id: 2, lat: 13.085, lng: 80.28, level: 0.7 },
          { id: 3, lat: 13.09, lng: 80.26, level: 0.6 },
          { id: 4, lat: 13.075, lng: 80.25, level: 0.8 },
        ],
        sosAlerts: [
          { id: 1, lat: 13.07, lng: 80.265, message: "Help needed!" },
          { id: 2, lat: 13.085, lng: 80.275, message: "Urgent rescue required!" },
        ],
      }
      setMapData(data)
    }
    fetchMapData()
  }, [])

  return (
    <div>
      <button
        onClick={() => setShowFloodLevels(!showFloodLevels)}
        style={{ marginBottom: "10px", padding: "10px", fontSize: "16px", cursor: "pointer" }}
      >
        {showFloodLevels ? "Hide Flood Levels" : "Show Flood Levels"}
      </button>

      <MapContainer center={[13.0827, 80.2707]} zoom={12} style={{ height: "600px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Safe Zones */}
        {mapData.safeZones.map((zone) => (
          <Marker key={zone.id} position={[zone.lat, zone.lng]} icon={safeZoneIcon}>
            <Popup>{zone.name}</Popup>
          </Marker>
        ))}

        {/* Food Shelters */}
        {mapData.foodShelters.map((shelter) => (
          <Marker key={shelter.id} position={[shelter.lat, shelter.lng]} icon={foodShelterIcon}>
            <Popup>{shelter.name}</Popup>
          </Marker>
        ))}

        {/* Medical Camps */}
        {mapData.medicalCamps.map((camp) => (
          <Marker key={camp.id} position={[camp.lat, camp.lng]} icon={medicalCampIcon}>
            <Popup>{camp.name}</Popup>
          </Marker>
        ))}

        {/* Flood Levels - Only show if toggled on */}
        {showFloodLevels &&
          mapData.floodLevels.map((flood) => (
            <CircleMarker
              key={flood.id}
              center={[flood.lat, flood.lng]}
              radius={30}
              pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: flood.level }}
            >
              <Popup>Flood Level: {flood.level * 100}%</Popup>
            </CircleMarker>
          ))}

        {/* SOS Alerts */}
        {mapData.sosAlerts.map((alert) => (
          <Marker key={alert.id} position={[alert.lat, alert.lng]} icon={sosIcon}>
            <Popup>{alert.message}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
