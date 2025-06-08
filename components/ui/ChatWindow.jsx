import React, { useState, useEffect } from "react";

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const websocketUrl = "ws://localhost:8000/ws/chat"; // Replace with your backend WebSocket URL

  useEffect(() => {
    const ws = new WebSocket(websocketUrl);

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => ws.close();
  }, []);

  const sendMessage = async () => {
    const token = localStorage.getItem("authToken"); // Replace with your JWT token retrieval logic
    const messagePayload = {
      sender_id: "user123", // Replace with the actual sender ID
      receiver_id: "receiver123", // Replace with the actual receiver ID
      content: newMessage,
    };

    await fetch("http://localhost:8000/visits/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(messagePayload),
    });

    setNewMessage("");
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[rgb(166,124,15)]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#e3e3d6] shadow-md">
        <h1 className="text-xl font-bold text-[#795a08]">HANDS4HIRE</h1>
        <nav className="flex gap-4">
          <button className="text-[#795a08]">Profile</button>
          <button className="text-[#795a08]">Search</button>
          <button className="text-[#795a08]">Visits History</button>
          <button className="text-[#795a08] bg-[#d4a017] px-4 py-2 rounded-md">Chat</button>
          <button className="text-[#795a08]">Log out</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-grow">
        {/* Conversations List */}
        <aside className="w-1/3 bg-[#e3e3d6] p-4">
          <h2 className="text-lg font-bold text-[#795a08] mb-4">Conversations</h2>
          <ul className="space-y-2">
            {messages.map((message, index) => (
              <li key={index} className="flex items-center gap-4 p-2 bg-[#f5f5f5] rounded-md shadow-sm">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-sm font-bold text-[#795a08]">{message.sender_id}</p>
                  <p className="text-xs text-[#a67c0f]">{message.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Area */}
        <section className="flex-grow bg-white p-4">
          <h2 className="text-lg font-bold text-[#795a08] mb-4">Chat</h2>
          <div className="flex flex-col gap-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender_id === "user123" ? "justify-end" : "justify-start"} gap-2`}>
                <p className={`p-2 ${message.sender_id === "user123" ? "bg-[#d4a017] text-white" : "bg-[#f5f5f5]"} rounded-md shadow-sm`}>
                  {message.content}
                </p>
              </div>
            ))}
          </div>

          {/* Input for new messages */}
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-md"
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} className="px-4 py-2 bg-[#d4a017] text-white rounded-md shadow-sm">
              Send
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}