import TaskContext from "../context/TaskContext";
import { useContext } from "react";
import TaskItem from "./TaskItem";
import TaskEdit from "./TaskEdit";

function TaskList({ filteredTask: tasks }) {
  const { deleteTaskHandler, doneTaskHandler, editTaskHandler } =
    useContext(TaskContext);

  return (
    <>
      {tasks.map((task, index) =>
        task.editing ? (
          <TaskEdit key={task.id} inde={index} task={task} />
        ) : (
          <TaskItem
            task={task}
            key={task.id}
            inde={index}
            onDeleteTask={deleteTaskHandler}
            onDoneTask={doneTaskHandler}
            onEditTask={editTaskHandler}
          />
        )
      )}
    </>
  );
}

export default TaskList;
