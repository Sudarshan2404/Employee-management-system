import React from "react";

const TaskList = () => {
  return (
    <div className="tasklist h-[55%] flex flex-nowrap justify-start overflow-x-auto items-center gap-5 w-full py-5 mt-10">
      <div className="flex-shrink-0 w-[300px] bg-yellow-400 h-full rounded-xl"></div>
      <div className="flex-shrink-0 w-[300px] bg-yellow-400 h-full rounded-xl"></div>
      <div className="flex-shrink-0 w-[300px] bg-yellow-400 h-full rounded-xl"></div>
      <div className="flex-shrink-0 w-[300px] bg-yellow-400 h-full rounded-xl"></div>
      <div className="flex-shrink-0 w-[300px] bg-yellow-400 h-full rounded-xl"></div>
      <div className="flex-shrink-0 w-[300px] bg-yellow-400 h-full rounded-xl"></div>
    </div>
  );
};

export default TaskList;
