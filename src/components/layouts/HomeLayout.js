import React from "react";

export default function HomeLayout({ children }) {
  return (
    <div className="h-screen flex grow">
      <main className="main-content h-100vh mt-0 flex w-full">{children}</main>
    </div>
  );
}
