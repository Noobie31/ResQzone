const EmergencyContacts = () => {
  const contacts = [
    { name: "Emergency Services", number: "101" },
    { name: "Fire Department", number: "112" },
    { name: "Police Department", number: "100" },
    { name: "Medical Emergency", number: "108" },
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

