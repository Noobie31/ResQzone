import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
})

const MapPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Interactive Disaster Map</h1>
      <DynamicMap />
    </div>
  )
}

export default MapPage

