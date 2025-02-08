"use client"

import { useState } from "react"
import CommunityHelpList from "../components/CommunityHelpList"
import CommunityHelpForm from "../components/CommunityHelpForm"

const CommunityHelpPage = () => {
  const [helpRequests, setHelpRequests] = useState([
    { id: 1, type: "Food", description: "Need food supplies for a family of 4", status: "Open" },
    { id: 2, type: "Medical", description: "Require insulin for diabetic patient", status: "In Progress" },
  ])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Community Help</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CommunityHelpList helpRequests={helpRequests} />
        <CommunityHelpForm setHelpRequests={setHelpRequests} />
      </div>
    </div>
  )
}

export default CommunityHelpPage
