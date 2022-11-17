import { useEffect, useRef, useState } from "react";

import {
  getChatRooms,
  initiateSocketConnection,
} from "../../services/ChatService";
import { getAllUsers } from "../../services/UserService";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import ChatRoom from "../chat/ChatRoom";
import Welcome from "../chat/Welcome";
import AllUsers from "../chat/AllUsers";
import SearchUsers from "../chat/SearchUsers";
import HomeLayout from "./HomeLayout";
import ChatItem from "../chatItem/ChatItem";
import Header from "../layouts/Header";

export default function ChatLayout() {
  const [users, SetUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [chatRooms, setChatRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const [currentChat, setCurrentChat] = useState();
  const [onlineUsersId, setonlineUsersId] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [isContact, setIsContact] = useState(false);

  const socket = useRef();

  const { currentUser } = useAuth();

  useEffect(() => {
    const getSocket = async () => {
      const res = await initiateSocketConnection();
      console.log(res);
      socket.current = res;
      socket.current.emit("addUser", currentUser.id);
      socket.current.on("getUsers", (users) => {
        console.log(users);
        const userId = users.map((u) => u[0]);
        setonlineUsersId(userId);
      });
    };

    getSocket();
  }, [currentUser.id]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getChatRooms(currentUser.id);
      console.log(res);
      setChatRooms(res);
    };

    fetchData();
  }, [currentUser.id]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUsers();
      console.log(res);
      SetUsers(res);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
    setFilteredRooms(chatRooms);
  }, [users, chatRooms]);

  useEffect(() => {
    if (isContact) {
      setFilteredUsers([]);
    } else {
      setFilteredRooms([]);
    }
  }, [isContact]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  const handleSearch = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);

    const searchedUsers = users.filter((user) => {
      return user.displayName
        .toLowerCase()
        .includes(newSearchQuery.toLowerCase());
    });

    const searchedUsersId = searchedUsers.map((u) => u.id);

    // If there are initial contacts
    if (chatRooms.length !== 0) {
      chatRooms.forEach((chatRoom) => {
        // Check if searched user is a contact or not.
        const isUserContact = chatRoom.members.some(
          (e) => e !== currentUser.id && searchedUsersId.includes(e)
        );
        setIsContact(isUserContact);

        isUserContact
          ? setFilteredRooms([chatRoom])
          : setFilteredUsers(searchedUsers);
      });
    } else {
      setFilteredUsers(searchedUsers);
    }
  };

  return (
    <HomeLayout>
      <>
        <div className="flex h-full flex-col bg-white w-64 dark:bg-navy-750">
          <div className="flex w-full items-center justify-between pl-4 pr-1 h-16">
            {currentUser && (
              <Link to="/" className="flex">
                <span className="self-center text-lg font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                  WeTalk
                </span>
              </Link>
            )}
          </div>
          <SearchUsers handleSearch={handleSearch} />

          <div className="flex flex-col">
            {users && users.length > 0 ? (
              <AllUsers
                users={searchQuery !== "" ? filteredUsers : users}
                chatRooms={searchQuery !== "" ? filteredRooms : chatRooms}
                setChatRooms={setChatRooms}
                onlineUsersId={onlineUsersId}
                currentUser={currentUser}
                changeChat={handleChatChange}
              />
            ) : (
              <p>loading...</p>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <Header />
          {currentChat ? (
            <ChatRoom
              currentChat={currentChat}
              currentUser={currentUser}
              socket={socket}
            />
          ) : (
            <Welcome />
          )}
        </div>
      </>
    </HomeLayout>
  );
}
