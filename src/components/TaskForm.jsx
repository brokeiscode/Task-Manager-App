import { useContext, useState } from "react";
import Button from "./shared/Button";
import TaskContext from "../context/TaskContext";

function TaskForm() {
  const [addTask, setAddTask] = useState("");
  const { addTaskHandler } = useContext(TaskContext);

  function addSubmitHandler(e) {
    e.preventDefault();

    if (!addTask.trim()) return setAddTask("");

    const newTask = {
      id: crypto.randomUUID(),
      name: addTask,
      packed: false,
      editing: false,
    };
    addTaskHandler(newTask);
    setAddTask("");
  }

  return (
    <form className="container" onSubmit={addSubmitHandler}>
      <label>Enter your task to Add </label>
      <input
        type="text"
        value={addTask}
        placeholder="Enter your proposed task"
        onChange={(e) => setAddTask(e.target.value)}
      />
      <Button>ADD</Button>
    </form>
  );
}

export default TaskForm;
