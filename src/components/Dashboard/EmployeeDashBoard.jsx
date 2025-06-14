import React from "react";
import Header from "../other/Header";
import TaskListnumbers from "../other/TaskListnumbers";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashBoard = () => {
  return (
    <div className="p-10 bg-[#icicic] h-screen">
      <Header />
      <TaskListnumbers />
      <TaskList />
    </div>
  );
};

export default EmployeeDashBoard;
