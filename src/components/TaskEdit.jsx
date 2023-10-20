import { useContext, useState } from "react";
import Button from "./shared/Button";
import TaskContext from "../context/TaskContext";

function TaskEdit({ inde, task }) {
  const { updateTaskHandler } = useContext(TaskContext);
  const [updateTask, setUpdateTask] = useState(task.name);

  function editSubmitHandler(e) {
    e.preventDefault();

    if (!updateTask.trim()) return setUpdateTask("");

    // const newTask = { updateTask };

    updateTaskHandler(updateTask, task.id);
    setUpdateTask("");
  }

  return (
    <form className="container" onSubmit={editSubmitHandler}>
      <label>{inde + 1}</label>
      <input
        type="text"
        value={updateTask}
        onChange={(e) => setUpdateTask(e.target.value)}
        placeholder="Updated your task"
      />
      <Button>UPDATE</Button>
    </form>
  );
}

export default TaskEdit;
