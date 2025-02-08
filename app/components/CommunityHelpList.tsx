"use client"

import { useState, useEffect } from "react"

const CommunityHelpList = () => {
  const [helpRequests, setHelpRequests] = useState([])

  useEffect(() => {
    // Simulating fetching help requests data
    const fetchHelpRequests = async () => {
      // Replace this with actual API call
      const data = [
        { id: 1, type: "Food", description: "Need food supplies for a family of 4", status: "Open" },
        { id: 2, type: "Medical", description: "Require insulin for diabetic patient", status: "In Progress" },
      ]
      setHelpRequests(data)
    }
    fetchHelpRequests()
  }, [])

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Help Requests</h2>
      <ul className="space-y-2">
        {helpRequests.map((request) => (
          <li key={request.id} className="border-b pb-2">
            <h3 className="font-semibold">{request.type}</h3>
            <p>{request.description}</p>
            <p
              className={`font-bold ${
                request.status === "Open"
                  ? "text-red-600"
                  : request.status === "In Progress"
                    ? "text-yellow-600"
                    : "text-green-600"
              }`}
            >
              Status: {request.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommunityHelpList

