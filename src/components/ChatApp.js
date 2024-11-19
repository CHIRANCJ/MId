import React, { useState, useEffect, useRef } from "react";
import websocketService from "./websocketService";
import { fetchMessageHistory } from "./messageService";

const ChatApp = ({ connectionId, receiverId, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const isFirstLoad = useRef(true); // Flag for initial load

  useEffect(() => {
    const loadHistory = async () => {
      const { messages: history, lastEvaluatedKey: newKey } = await fetchMessageHistory(
        connectionId,
        receiverId,
        lastEvaluatedKey
      );
      console.log(newKey);

      const parsedHistory = history.map((msg) => ({
        ...msg,
        isSent: msg.senderId === connectionId,
      }));

      setMessages((prevMessages) => [...parsedHistory, ...prevMessages]);
      setLastEvaluatedKey(newKey);
      setUnreadCount(0);

      if (isFirstLoad.current) {
        scrollToBottom();
        isFirstLoad.current = false; // Set to false after first load
      }
    };

    loadHistory();

    if (!websocketService.ws || websocketService.ws.readyState !== WebSocket.OPEN) {
      websocketService.connect(connectionId, (message) => {
        const updatedMessage = {
          ...message,
          isSent: message.senderId === connectionId,
        };
        setMessages((prevMessages) => [...prevMessages, updatedMessage]);
        if (!updatedMessage.isSent) {
          setUnreadCount((prevCount) => prevCount + 1);
        }
        scrollToBottom();
      });
    }

    return () => websocketService.close();
  }, [connectionId, receiverId]);

  const loadMoreMessages = async () => {
    if (!lastEvaluatedKey) return;

    const { messages: history, lastEvaluatedKey: newKey } = await fetchMessageHistory(
      connectionId,
      receiverId,
      lastEvaluatedKey
    );

    const parsedHistory = history.map((msg) => ({
      ...msg,
      isSent: msg.senderId === connectionId,
    }));

    setMessages((prevMessages) => [...parsedHistory, ...prevMessages]);
    setLastEvaluatedKey(newKey);
  };

  const handleScroll = () => {
    if (chatContainerRef.current.scrollTop === 0 && !isFirstLoad.current) {
      loadMoreMessages();
      console.log(isFirstLoad.current);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const messageData = {
        action: "sendMessage",
        senderId: connectionId,
        receiverId: receiverId,
        content: inputMessage,
        timestamp: new Date().toISOString(),
        read: false,
      };

      websocketService.sendMessage(messageData);
      setMessages((prevMessages) => [
        ...prevMessages,
        { ...messageData, isSent: true, read: false },
      ]);
      setInputMessage("");
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <button onClick={onBack}>Back to Conversations</button>
      <h2>
        Chat with {receiverId}{" "}
        {unreadCount > 0 && (
          <span style={{ fontSize: "small", color: "red" }}>({unreadCount})</span>
        )}
      </h2>
      <div
        ref={chatContainerRef}
        onScroll={handleScroll}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "400px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: msg.isSent ? "flex-end" : "flex-start",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: msg.isSent ? "#daf8e3" : "#f1f0f0",
              }}
            >
              <div>{msg.content}</div>
              <div style={{ fontSize: "0.8em", color: "#555", textAlign: "right" }}>
                {new Date(msg.timestamp).toLocaleTimeString()}{" "}
                {msg.isSent && !msg.read && <span style={{ color: "gray" }}>✔</span>}
                {msg.read && msg.isSent && <span style={{ color: "blue" }}>✔✔</span>}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Type your message..."
        style={{ width: "80%", padding: "10px" }}
      />
      <button onClick={handleSendMessage} style={{ padding: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default ChatApp;
