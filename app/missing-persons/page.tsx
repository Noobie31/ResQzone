"use client"

import { createContext, useContext, useState } from "react"
import MissingPersonForm from "../components/MissingPersonForm"
import MissingPersonsList from "../components/MissingPersonsList"

// Create context for sharing state between components
export const MissingPersonsContext = createContext()

const MissingPersonsPage = () => {
  const [missingPersons, setMissingPersons] = useState([
    { id: 1, name: "John Doe", age: 35, lastSeen: "2023-05-15", status: "Missing", image: null },
    { id: 2, name: "Jane Smith", age: 28, lastSeen: "2023-05-14", status: "Found", image: null },
  ])

  const addMissingPerson = (newPerson) => {
    setMissingPersons(prev => [...prev, { ...newPerson, id: prev.length + 1, status: "Missing" }])
  }

  return (
    <MissingPersonsContext.Provider value={{ missingPersons, addMissingPerson }}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Missing Persons Tracking</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MissingPersonsList />
          <MissingPersonForm />
        </div>
      </div>
    </MissingPersonsContext.Provider>
  )
}

export default MissingPersonsPage