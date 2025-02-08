
"use client"

import { useState, useContext } from "react"
import { MissingPersonsContext } from "../missing-persons/page"
import MissingPersonsPage from "../missing-persons/page"

const MissingPersonForm = () => {
  const { addMissingPerson } = useContext(MissingPersonsContext)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    lastSeen: "",
    description: "",
    image: null
  })
  const [imagePreview, setImagePreview] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
        setFormData(prev => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    addMissingPerson(formData)
    setFormData({
      name: "",
      age: "",
      lastSeen: "",
      description: "",
      image: null
    })
    setImagePreview(null)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Report Missing Person</h2>

      <div className="mb-4">
        <label htmlFor="image" className="block mb-2">
          Photo
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
        {imagePreview && (
          <div className="mt-2 relative w-32 h-32">
            <img
              src={imagePreview}
              alt="Preview"
              className="object-cover rounded w-full h-full"
            />
          </div>
        )}
      </div>

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