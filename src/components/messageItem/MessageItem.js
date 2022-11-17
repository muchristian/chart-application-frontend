import React from "react";
import { format } from "timeago.js";

const MessageItem = ({ message, self }) => {
  return (
    <>
      {self !== message.sender ? (
        <div className="flex items-start space-x-2.5 sm:space-x-5">
          <div class="h-10 w-10">
            <div class="flex items-center justify-center h-full w-full rounded-full bg-gray-200 text-base uppercase text-title dark:bg-navy-500 dark:text-navy-100">
              jd
            </div>
          </div>

          <div className="flex flex-col items-start space-y-3.5">
            <div className="mr-4 max-w-lg sm:mr-10">
              <div className="rounded-2xl rounded-tl-none bg-white p-3 text-title shadow-sm dark:bg-navy-700 dark:text-navy-100">
                {message.message}
              </div>
              <p className="mt-1 ml-auto text-right text-xs text-body dark:text-navy-300">
                {format(message.createdAt)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
          <div className="flex flex-col items-end space-y-3.5">
            <div className="ml-4 max-w-lg sm:ml-10">
              <div className="rounded-2xl rounded-tr-none bg-primary-100 p-3 text-title shadow-sm dark:bg-accent dark:text-white">
                {message.message}
              </div>
              <p className="mt-1 ml-auto text-left text-xs text-body dark:text-navy-300">
                {format(message.createdAt)}
              </p>
            </div>
          </div>
          <div class="h-10 w-10">
            <div class="flex items-center justify-center h-full w-full rounded-full bg-gray-200 text-base uppercase text-title dark:bg-navy-500 dark:text-navy-100">
              jd
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageItem;
