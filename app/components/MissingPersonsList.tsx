"use client"

import { useState, useEffect } from "react"

const MissingPersonsList = () => {
  const [missingPersons, setMissingPersons] = useState([])

  useEffect(() => {
    // Simulating fetching missing persons data
    const fetchMissingPersons = async () => {
      // Replace this with actual API call
      const data = [
        { id: 1, name: "John Doe", age: 35, lastSeen: "2023-05-15", status: "Missing" },
        { id: 2, name: "Jane Smith", age: 28, lastSeen: "2023-05-14", status: "Found" },
      ]
      setMissingPersons(data)
    }
    fetchMissingPersons()
  }, [])

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Missing Persons List</h2>
      <ul className="space-y-2">
        {missingPersons.map((person) => (
          <li key={person.id} className="border-b pb-2">
            <h3 className="font-semibold">{person.name}</h3>
            <p>Age: {person.age}</p>
            <p>Last Seen: {person.lastSeen}</p>
            <p className={`font-bold ${person.status === "Missing" ? "text-red-600" : "text-green-600"}`}>
              Status: {person.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MissingPersonsList

