import React, { useEffect, useState } from "react";

const originalUser = {
  name: "davit",
  surname: "grdzelo",
  age: "20",
  skill: "react-developer",
};

export default function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("users")) || [];
      if (user.length ===0) {
        setIsLoading(true);
      } else {
        setUser(user);
        setIsLoading(false);
      }
    }, 1000);
  }, [user, setUser]);

  function handleAddUser() {
    localStorage.setItem("users", JSON.stringify(originalUser));
  }
  console.log(user);

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-purple-100">
      <div className="w-60 capitalize border-2 border-purple-400 rounded-2xl p-5 bg-purple-200 shadow-md shadow-purple-400">
        <h1 className="font-bold text-md mb-2 text-purple-400">add user</h1>
        <button
          onClick={() => handleAddUser()}
          className="capitalize p-2 cursor-pointer text-purple-500 rounded-sm border-2 bg-purple-300 border-purple-400 hover:bg-purple-300/[.5] transition-all">add user</button>
      </div>
      <br />
      <div className="w-60 flex justify-center items-center flex-col h-45 capitalize border-2 border-purple-400 rounded-2xl p-5 bg-purple-200 shadow-md shadow-purple-400">
        {!isLoading ? (
          <div>
            <h2 className="font-bold text-md mb-2 text-purple-400">{user.name}</h2>
            <h2 className="font-bold text-md mb-2 text-purple-400">{user.surname}</h2>
            <h2 className="font-bold text-md mb-2 text-purple-400">{user.age}</h2>
            <h2 className="font-bold text-md mb-2 text-purple-400">{user.skill}</h2>
          </div>
        ) : (
          <div className="size-10 border-3 rounded-full border-t-purple-900 border-purple-500 animate-spin" />
        )}
      </div>
    </div>
  );
}
