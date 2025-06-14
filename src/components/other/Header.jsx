import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello <br />{" "}
          <span className="text-3xl font-semibold">Sudarshan 👋</span>
        </h1>
        <button className="px-5 py-2 bg-red-600 font-medium text-xl rounded-xl cursor-pointer">
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
