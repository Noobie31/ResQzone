"use client"

import { useState, useEffect } from "react"

const LiveUpdates = () => {
  const [updates, setUpdates] = useState([])

  useEffect(() => {
    // Simulating real-time updates
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        message: `New update at ${new Date().toLocaleTimeString()}`,
      }
      setUpdates((prevUpdates) => [newUpdate, ...prevUpdates.slice(0, 4)])
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Live Updates</h2>
      <ul className="space-y-2">
        {updates.map((update) => (
          <li key={update.id} className="bg-gray-100 p-2 rounded">
            {update.message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LiveUpdates

