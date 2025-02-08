"use client"

import { useState } from "react"

const CommunityHelpForm = () => {
  const [formData, setFormData] = useState({
    type: "Food",
    description: "",
    location: "",
    contact: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Help request submitted successfully!")
    setFormData({
      type: "Food",
      description: "",
      location: "",
      contact: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Request Help</h2>
      <div className="mb-4">
        <label htmlFor="type" className="block mb-2">
          Type of Help Needed
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="Food">Food</option>
          <option value="Medical">Medical</option>
          <option value="Shelter">Shelter</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
          rows={4}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block mb-2">
          Contact Information
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit Request
      </button>
    </form>
  )
}

export default CommunityHelpForm

