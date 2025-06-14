import React from "react";

const TaskListnumbers = () => {
  return (
    <div className="flex screen justify-between items-center gap-5 p-10">
      <div className="bg-blue-600 w-[45%] py-6 px-9 rounded-2xl">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-2xl font-medium">New Tasks</h3>
      </div>
      <div className="bg-yellow-500 w-[45%] py-6 px-9 rounded-2xl">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-2xl font-medium">New Tasks</h3>
      </div>
      <div className="bg-emerald-500 w-[45%] py-6 px-9 rounded-2xl">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-2xl font-medium">New Tasks</h3>
      </div>
      <div className="bg-red-600 w-[45%] py-6 px-9 rounded-2xl">
        <h1 className="text-3xl font-semibold">0</h1>
        <h3 className="text-2xl font-medium">New Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListnumbers;
