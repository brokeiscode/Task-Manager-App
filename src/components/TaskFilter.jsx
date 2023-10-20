import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";
import TaskList from "./TaskList";

function TaskFilter() {
  const { tasks } = useContext(TaskContext);
  const [filt, setFilt] = useState("all");

  let filteredTask;

  if (filt === "all") filteredTask = tasks;

  if (filt === "packed") filteredTask = tasks.filter((task) => task.packed);

  if (filt === "unpacked") filteredTask = tasks.filter((task) => !task.packed);

  return (
    <div className="container">
      <TaskList filteredTask={filteredTask} />
      <select
        className="select"
        value={filt}
        onChange={(e) => setFilt(e.target.value)}
      >
        <option value="all">Filter by All</option>
        <option value="packed">Filter by Completed</option>
        <option value="unpacked">Filter by Incomplete</option>
      </select>
    </div>
  );
}

export default TaskFilter;
