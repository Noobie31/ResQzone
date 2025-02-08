"use client"

import { useState } from "react"

const VolunteerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    availability: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    alert("Volunteer registration submitted successfully!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      skills: "",
      availability: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Full Name
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
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block mb-2">
          Phone Number
        </label>
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
        <label htmlFor="skills" className="block mb-2">
          Skills
        </label>
        <textarea
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
          rows={3}
          placeholder="List your relevant skills (e.g., first aid, search and rescue, language translation)"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="availability" className="block mb-2">
          Availability
        </label>
        <select
          id="availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        >
          <option value="">Select availability</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="weekends">Weekends only</option>
          <option value="on-call">On-call</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Register as Volunteer
      </button>
    </form>
  )
}

export default VolunteerRegistrationForm

