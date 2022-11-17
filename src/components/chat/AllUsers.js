import { useState, useEffect } from "react";

import { createChatRoom } from "../../services/ChatService";
import Contact from "./Contact";
import UserLayout from "../layouts/UserLayout";
import ChatItem from "../chatItem/ChatItem";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllUsers({
  users,
  chatRooms,
  setChatRooms,
  onlineUsersId,
  currentUser,
  changeChat,
}) {
  const [selectedChat, setSelectedChat] = useState();
  const [nonContacts, setNonContacts] = useState([]);
  const [contactIds, setContactIds] = useState([]);

  useEffect(() => {
    const Ids = chatRooms.map((chatRoom) => {
      return chatRoom.members.find((member) => member !== currentUser.uid);
    });
    setContactIds(Ids);
  }, [chatRooms, currentUser.uid]);

  useEffect(() => {
    setNonContacts(
      users.filter(
        (f) => f.uid !== currentUser.uid && !contactIds.includes(f.uid)
      )
    );
  }, [contactIds, users, currentUser.uid]);

  const changeCurrentChat = (index, chat) => {
    setSelectedChat(index);
    changeChat(chat);
  };

  const handleNewChatRoom = async (user) => {
    const members = {
      senderId: currentUser.uid,
      receiverId: user.uid,
    };
    console.log(currentUser.uid);
    const res = await createChatRoom(members);
    console.log(res);
    setChatRooms((prev) => [...prev, res]);
    changeChat(res);
  };

  console.log(nonContacts);

  return (
    <>
      <ul className="overflow-auto h-[30rem]">
        <h2 className="my-2 mb-2 ml-2 text-gray-900 dark:text-white">Chats</h2>
        <li>
          {chatRooms.map((chatRoom, index) => (
            <Contact
              key={index}
              chatRoom={chatRoom}
              onlineUsersId={onlineUsersId}
              currentUser={currentUser}
              click={() => changeCurrentChat(index, chatRoom)}
            />
          ))}
        </li>
        <h2 className="my-2 mb-2 ml-2 text-gray-900 dark:text-white">
          Other Users
        </h2>
        <li>
          {nonContacts.map((nonContact, index) => (
            <ChatItem
              user={nonContact}
              onlineUsersId={onlineUsersId}
              key={index}
              click={() => handleNewChatRoom(nonContact)}
            />
          ))}
        </li>
      </ul>
    </>
  );
}
