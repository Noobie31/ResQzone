import LiveUpdates from "./components/LiveUpdates"
import SOSButton from "./components/SOSButton"
import EmergencyContacts from "./components/EmergencyContacts"
import LiveLocationSharing from "./components/LiveLocationSharing"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">ResQzone</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <LiveUpdates />
          <SOSButton />
        </div>
        <div>
          <EmergencyContacts />
          <div className="mt-4">
            <h2 className="text-xl font-semibold  mb-2">Your Live Location</h2>
            <LiveLocationSharing />
          </div>
        </div>
      </div>
    </div>
  )
}

