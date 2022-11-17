import React from "react";

const ChatItem = ({ user, newMessages = false, key, click }) => {
  return (
    <div
      className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 hover:bg-gray-200 dark:hover:bg-navy-600"
      key={key}
      onClick={click}
    >
      <div class="h-10 w-10">
        <div class="flex items-center justify-center h-full w-full rounded-full bg-gray-200 text-base uppercase text-title dark:bg-navy-500 dark:text-navy-100">
          jd
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex items-baseline justify-between space-x-1.5">
          <p className="text-xs+ font-medium text-title line-clamp-1 dark:text-navy-100">
            {user?.username}
          </p>
          <span className="text-tiny text-slate-400 dark:text-navy-300">
            11:03
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between space-x-1">
          <p className="text-xs+ text-body line-clamp-1 dark:text-navy-300">
            😂 Lorem ipsum dolor
          </p>
          <div
            className={`flex h-4 w-4 items-center justify-center rounded-full ${
              newMessages ? "bg-primary text-white" : "bg-gray-200 text-title"
            } text-tiny font-medium leading-none dark:bg-navy-450 dark:text-white`}
          >
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
