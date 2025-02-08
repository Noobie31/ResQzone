"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const LiveLocationSharing = () => {
  const [position, setPosition] = useState(null)

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setPosition([position.coords.latitude, position.coords.longitude])
        },
        (error) => {
          console.error("Error getting location:", error)
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
      )

      return () => {
        navigator.geolocation.clearWatch(watchId)
      }
    } else {
      console.error("Geolocation is not supported by this browser.")
    }
  }, [])

  if (!position) {
    return <div>Loading location...</div>
  }

  return (
    <div className="h-64 w-full">
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Your current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default LiveLocationSharing

