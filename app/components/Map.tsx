"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
})

const Map = () => {
  const [mapData, setMapData] = useState({
    safeZones: [],
    foodShelters: [],
    medicalCamps: [],
    floodLevels: [],
    sosAlerts: [],
  })

  useEffect(() => {
    // Simulating fetching map data
    const fetchMapData = async () => {
      // Replace this with actual API call
      const data = {
        safeZones: [
          { id: 1, lat: 51.505, lng: -0.09, name: "Safe Zone 1" },
          { id: 2, lat: 51.51, lng: -0.1, name: "Safe Zone 2" },
        ],
        foodShelters: [
          { id: 1, lat: 51.515, lng: -0.095, name: "Food Shelter 1" },
          { id: 2, lat: 51.52, lng: -0.105, name: "Food Shelter 2" },
        ],
        medicalCamps: [
          { id: 1, lat: 51.51, lng: -0.085, name: "Medical Camp 1" },
          { id: 2, lat: 51.505, lng: -0.095, name: "Medical Camp 2" },
        ],
        floodLevels: [
          { id: 1, lat: 51.5, lng: -0.08, level: 0.5 },
          { id: 2, lat: 51.51, lng: -0.09, level: 0.8 },
        ],
        sosAlerts: [{ id: 1, lat: 51.515, lng: -0.085, message: "Help needed!" }],
      }
      setMapData(data)
    }
    fetchMapData()
  }, [])

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "600px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {mapData.safeZones.map((zone) => (
        <CircleMarker
          key={zone.id}
          center={[zone.lat, zone.lng]}
          radius={20}
          pathOptions={{ color: "green", fillColor: "green" }}
        >
          <Popup>{zone.name}</Popup>
        </CircleMarker>
      ))}

      {mapData.foodShelters.map((shelter) => (
        <Marker key={shelter.id} position={[shelter.lat, shelter.lng]}>
          <Popup>{shelter.name}</Popup>
        </Marker>
      ))}

      {mapData.medicalCamps.map((camp) => (
        <CircleMarker
          key={camp.id}
          center={[camp.lat, camp.lng]}
          radius={15}
          pathOptions={{ color: "red", fillColor: "red" }}
        >
          <Popup>{camp.name}</Popup>
        </CircleMarker>
      ))}

      {mapData.floodLevels.map((flood) => (
        <CircleMarker
          key={flood.id}
          center={[flood.lat, flood.lng]}
          radius={30}
          pathOptions={{ color: "blue", fillColor: "blue", fillOpacity: flood.level }}
        >
          <Popup>Flood Level: {flood.level * 100}%</Popup>
        </CircleMarker>
      ))}

      {mapData.sosAlerts.map((alert) => (
        <Marker
          key={alert.id}
          position={[alert.lat, alert.lng]}
          icon={L.icon({ iconUrl: "/sos-icon.png", iconSize: [32, 32] })}
        >
          <Popup>{alert.message}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map

