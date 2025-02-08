import MissingPersonsList from "../components/MissingPersonsList"
import MissingPersonForm from "../components/MissingPersonForm"

const MissingPersonsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Missing Persons Tracking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MissingPersonsList />
        <MissingPersonForm />
      </div>
    </div>
  )
}

export default MissingPersonsPage

