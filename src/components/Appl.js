import React, { useState } from "react";
import ChatApp from "./ChatApp";

function Appl() {
  const [selectedChat, setSelectedChat] = useState(null);

  const conversations = [
    { id: "user110", name: "Chat with User 101", receiverId: "user28" }    // Add other users or dynamically load from DynamoDB
  ];

  return (
    <div className="App">
      <h1>Chat App</h1>
      {!selectedChat ? (
        <div>
          <h2>Conversations</h2>
          <ul>
            {conversations.map((conversation) => (
              <li
                key={conversation.id}
                onClick={() => setSelectedChat(conversation)}
              >
                {conversation.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ChatApp
          connectionId={selectedChat.id}
          receiverId={selectedChat.receiverId}
          onBack={() => setSelectedChat(null)}
        />
      )}
    </div>
  );
}

export default Appl;
