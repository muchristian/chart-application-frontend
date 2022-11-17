import React from "react";

const Navbar = ({ classes }) => {
  return (
    <nav className={`flex justify-between border-b border-gray-100 ${classes}`}>
      <div className="flex items-center gap-6">
        <div className="ml-1 h-7 w-7">
          <button className="menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80 active">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="flex cursor-pointer items-center space-x-4 font-inter">
          <div className="relative  h-10 w-10">
            <img
              className="rounded-full"
              src="/avatar/avatar-20.jpg"
              alt="avatar"
            />
          </div>
          <div>
            <p className="font-medium text-title line-clamp-1 dark:text-navy-100">
              Konnor Guzman
            </p>
            <p className="mt-0.5 text-xs text-body">Last seen recently</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <button className="flex items-center justify-center h-9 w-9 rounded-full p-0 text-body hover:bg-gray-200 focus:bg-gray-200 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
        <button className="flex items-center justify-center h-9 w-9 rounded-full p-0 text-body hover:bg-gray-200 focus:bg-gray-200 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:flex text-slate-500 dark:text-navy-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.25 21.167h5.5c4.584 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417ZM13.834 2.833v18.334"
            ></path>
          </svg>
        </button>
        <button
          x-ref="popperRef"
          className="flex items-center justify-center h-9 w-9 rounded-full p-0 text-body hover:bg-gray-200 focus:bg-gray-200 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
