"use client"

import { useState } from "react"

const SOSButton = () => {
  const [isSending, setIsSending] = useState(false)

  const handleSOS = async () => {
    setIsSending(true)
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert("SOS signal sent! Help is on the way.")
    setIsSending(false)
  }

  return (
    <button
      onClick={handleSOS}
      disabled={isSending}
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl mt-4 w-full"
    >
      {isSending ? "Sending SOS..." : "SOS Emergency"}
    </button>
  )
}

export default SOSButton

