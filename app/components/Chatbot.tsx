"use client"

import { useState } from "react"

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { text: input, sender: "user" }
    setMessages((prevMessages) => [...prevMessages, userMessage])
    setInput("")

    // Simulating bot response
    setTimeout(() => {
      const botMessage = { text: `I received: "${input}"`, sender: "bot" }
      setMessages((prevMessages) => [...prevMessages, botMessage])
    }, 1000)
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h3 className="font-semibold">Emergency Chatbot</h3>
      </div>
      <div className="h-64 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block p-2 rounded-lg ${
                message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="border-t p-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="w-full px-3 py-2 border rounded"
        />
      </form>
    </div>
  )
}

export default Chatbot

