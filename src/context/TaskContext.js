import { createContext, useState } from "react";

// create context
const TaskContext = createContext();

// create provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  function addTaskHandler(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTaskHandler(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function doneTaskHandler(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, packed: !task.packed } : task
      )
    );
  }

  function editTaskHandler(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, editing: !task.editing } : task
      )
    );
  }

  function updateTaskHandler(newtask, id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, name: newtask, editing: !task.editing, packed: false }
          : task
      )
    );
  }
  //   tasks.map(task=>task.id === id ?  )

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTaskHandler,
        deleteTaskHandler,
        doneTaskHandler,
        editTaskHandler,
        updateTaskHandler,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
