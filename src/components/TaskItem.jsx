import Button from "./shared/Button";

function TaskItem({ task, inde, onDeleteTask, onDoneTask, onEditTask }) {
  return (
    <div className="container taskitem">
      <label>{inde + 1}</label>
      <p
        style={task.packed ? { textDecoration: "line-through" } : {}}
        type="text"
      >
        {task.name}
      </p>
      <span>
        <Button onClick={() => onEditTask(task.id)}>✍️</Button>
        <Button onClick={() => onDoneTask(task.id)}>✅</Button>
        <Button onClick={() => onDeleteTask(task.id)}>❌</Button>
      </span>
    </div>
  );
}

export default TaskItem;
