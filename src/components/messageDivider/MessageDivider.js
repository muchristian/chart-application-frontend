import React from "react";

const MessageDivider = ({ currentTime }) => {
  return (
    <div className="mx-4 flex items-center space-x-3">
      <div className="h-px flex-1 bg-gray-200 dark:bg-navy-500"></div>
      <p>{currentTime}</p>
      <div className="h-px flex-1 bg-gray-200 dark:bg-navy-500"></div>
    </div>
  );
};

export default MessageDivider;
