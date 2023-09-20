import React from "react";

const Footer = ({ tasks }) => {
  const pendingTasks = tasks.filter((task) => task.checked === false);
  return (
    <footer>
      <p>
        {pendingTasks.length} {pendingTasks.length === 1 ? "task" : "tasks"} to
        do
      </p>
    </footer>
  );
};

export default Footer;
