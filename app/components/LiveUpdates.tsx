"use client"

import { useState, useEffect } from "react"

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([])

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch("https://api.reliefweb.int/v1/reports?appname=apidoc&limit=5&profile=full")
        const data = await response.json()
        
        if (data?.data) {
          const formattedUpdates = data.data.map((item) => ({
            id: item.id,
            message: item.fields.title,
          }))
          setUpdates(formattedUpdates)
        }
      } catch (error) {
        console.error("Error fetching disaster updates:", error)
      }
    }

    fetchUpdates()
    const interval = setInterval(fetchUpdates, 60000) // Fetch updates every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Live Disaster Updates</h2>
      <ul className="space-y-2">
        {updates.length > 0 ? (
          updates.map((update) => (
            <li key={update.id} className="bg-gray-100 p-2 rounded">
              {update.message}
            </li>
          ))
        ) : (
          <p>No updates available.</p>
        )}
      </ul>
    </div>
  )
}

export default LiveUpdates
