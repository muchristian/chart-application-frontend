import { useState, useEffect, useRef } from "react";

import { getMessagesOfChatRoom, sendMessage } from "../../services/ChatService";

import Message from "./Message";
import Contact from "./Contact";
import ChatForm from "./ChatForm";
import MessageItem from "../messageItem/MessageItem";

export default function ChatRoom({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMessagesOfChatRoom(currentChat._id);
      setMessages(res);
    };

    fetchData();
  }, [currentChat._id]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  useEffect(() => {
    socket.current?.on("getMessage", (data) => {
      setIncomingMessage({
        senderId: data.senderId,
        message: data.message,
      });
    });
  }, [socket]);

  useEffect(() => {
    incomingMessage && setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage]);

  const handleFormSubmit = async (message) => {
    const receiverId = currentChat.members.find(
      (member) => member !== currentUser.uid
    );

    socket.current.emit("sendMessage", {
      senderId: currentUser.uid,
      receiverId: receiverId,
      message: message,
    });

    const messageBody = {
      chatRoomId: currentChat._id,
      sender: currentUser.uid,
      message: message,
    };
    const res = await sendMessage(messageBody);
    setMessages([...messages, res]);
  };

  return (
    <>
      {/* <div className="lg:col-span-2 lg:block">
      <div className="w-full">
        <div className="p-3 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <Contact chatRoom={currentChat} currentUser={currentUser} />
        </div> */}

      <div className="grow overflow-y-auto px-4 py-4 bg-gray-50 transition-all duration-[.25s] scrollbar-sm">
        <div className="space-y-5">
          {messages.map((message, index) => (
            <div key={index} ref={scrollRef}>
              <MessageItem message={message} self={currentUser.uid} />
            </div>
          ))}
        </div>
      </div>

      <ChatForm handleFormSubmit={handleFormSubmit} />
    </>
  );
}
