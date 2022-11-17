export default function UserLayout({ user, onlineUsersId }) {
  console.log(user);
  return (
    <div className="relative flex items-center">
      <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
        <svg
          class="absolute -left-1 w-12 h-12 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <span className="block ml-2 text-gray-500 dark:text-gray-400">
        {user?.username}
      </span>
      {onlineUsersId?.includes(user?.uid) ? (
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-500 dark:bg-green-400 border-2 border-white rounded-full"></span>
      ) : (
        <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-gray-400 border-2 border-white rounded-full"></span>
      )}
    </div>
  );
}
