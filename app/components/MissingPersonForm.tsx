"use client"

import { useState } from "react"

const MissingPersonForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    lastSeen: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Missing person report submitted successfully!")
    setFormData({
      name: "",
      age: "",
      lastSeen: "",
      description: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Report Missing Person</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
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
        <label htmlFor="age" className="block mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastSeen" className="block mb-2">
          Last Seen Date
        </label>
        <input
          type="date"
          id="lastSeen"
          name="lastSeen"
          value={formData.lastSeen}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
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
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit Report
      </button>
    </form>
  )
}

export default MissingPersonForm

