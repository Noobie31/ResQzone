import CommunityHelpList from "../components/CommunityHelpList"
import CommunityHelpForm from "../components/CommunityHelpForm"

const CommunityHelpPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Community Help</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CommunityHelpList />
        <CommunityHelpForm />
      </div>
    </div>
  )
}

export default CommunityHelpPage

