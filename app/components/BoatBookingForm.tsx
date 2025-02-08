"use client"

import { useState } from "react"

const BoatBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    passengers: "",
    urgency: "medium",
  })

  const [loadingLocation, setLoadingLocation] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser")
      return
    }

    setLoadingLocation(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setFormData((prevData) => ({
          ...prevData,
          location: `${latitude}, ${longitude}`,
        }))
        setLoadingLocation(false)
      },
      (error) => {
        alert("Failed to get location. Please enable GPS.")
        setLoadingLocation(false)
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Boat booking request submitted successfully!")
    setFormData({
      name: "",
      phone: "",
      location: "",
      passengers: "",
      urgency: "medium",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block mb-2">Location</label>
        <div className="flex">
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-l"
            placeholder="Enter location or use GPS"
          />
          <button
            type="button"
            onClick={fetchLocation}
            disabled={loadingLocation}
            className="bg-gray-300 px-3 py-2 rounded-r hover:bg-gray-400"
          >
            {loadingLocation ? "Fetching..." : "📍"}
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="passengers" className="block mb-2">Number of Passengers</label>
        <input
          type="number"
          id="passengers"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="urgency" className="block mb-2">Urgency Level</label>
        <select
          id="urgency"
          name="urgency"
          value={formData.urgency}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Request Boat
      </button>
    </form>
  )
}

export default BoatBookingForm
