"use client"

const CommunityHelpList = ({ helpRequests }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Help Requests</h2>
      <ul className="space-y-2">
        {helpRequests.length === 0 ? (
          <p>No help requests available.</p>
        ) : (
          helpRequests.map((request) => (
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
          ))
        )}
      </ul>
    </div>
  )
}

export default CommunityHelpList
