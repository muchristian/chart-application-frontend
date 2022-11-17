import { useState, useEffect } from "react";

import { getUser } from "../../services/UserService";
import UserLayout from "../layouts/UserLayout";
import ChatItem from "../chatItem/ChatItem";

export default function Contact({
  chatRoom,
  onlineUsersId,
  currentUser,
  key,
  click,
}) {
  const [contact, setContact] = useState();

  useEffect(() => {
    const contactId = chatRoom.members?.find(
      (member) => member !== currentUser.uid
    );

    const fetchData = async () => {
      const res = await getUser(contactId);
      console.log(res);
      setContact(res);
    };

    fetchData();
  }, [chatRoom, currentUser]);

  return (
    <ChatItem
      user={contact}
      onlineUsersId={onlineUsersId}
      key={key}
      click={click}
    />
  );
}
