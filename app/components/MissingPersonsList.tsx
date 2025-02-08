"use client"

import { useContext } from "react"
import { MissingPersonsContext } from "../missing-persons/page"
import Image from "next/image"

const MissingPersonsList = () => {
  const { missingPersons } = useContext(MissingPersonsContext)

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Missing Persons List</h2>
      <ul className="space-y-4">
        {missingPersons.map((person) => (
          <li key={person.id} className="border-b pb-4">
            <div className="flex gap-4">
              {person.image && (
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              )}
              <div className="flex-grow">
                <h3 className="font-semibold">{person.name}</h3>
                <p>Age: {person.age}</p>
                <p>Last Seen: {person.lastSeen}</p>
                <p className={`font-bold ${person.status === "Missing" ? "text-red-600" : "text-green-600"}`}>
                  Status: {person.status}
                </p>
                {person.description && (
                  <p className="mt-2 text-gray-600">{person.description}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MissingPersonsList