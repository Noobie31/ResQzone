"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react"; // Import icons

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const mockResponses = {
    "help": "Please specify your emergency: food, water, shelter, medical aid, or rescue?",
    "food": "Relief centers nearby are providing food. Check the nearest shelter for assistance.",
    "water": "Safe drinking water is available at local aid stations. Please stay hydrated.",
    "shelter": "Evacuation centers are open at designated safe zones. Contact local authorities for locations.",
    "medical": "Emergency medical services are deployed. Visit the nearest relief camp for first aid.",
    "rescue": "Rescue teams are active. Share your location for immediate assistance.",
    "default": "I'm here to help! Type 'help' to see available options."
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage = { text: mockResponses[input.toLowerCase()] || mockResponses["default"], sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chatbox Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-lg shadow-lg border border-gray-300 z-50">
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex justify-between">
            <h3 className="font-semibold">Disaster Relief Chatbot</h3>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>
          <div className="h-64 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === "user" ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="border-t p-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your request..."
              className="flex-1 px-3 py-2 border rounded"
            />
            <button type="submit" className="ml-2 bg-red-600 text-white px-4 py-2 rounded">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
