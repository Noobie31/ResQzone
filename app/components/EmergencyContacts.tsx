const EmergencyContacts = () => {
  const contacts = [
    { name: "Emergency Services", number: "911" },
    { name: "Fire Department", number: "555-1234" },
    { name: "Police Department", number: "555-5678" },
    { name: "Medical Emergency", number: "555-9101" },
  ]

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Emergency Contacts</h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.name} className="flex justify-between">
            <span>{contact.name}</span>
            <a href={`tel:${contact.number}`} className="text-blue-600 hover:underline">
              {contact.number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmergencyContacts

