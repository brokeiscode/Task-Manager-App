import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";
import TaskFilter from "./components/TaskFilter";

function App() {
  return (
    <TaskProvider>
      <div>
        <TaskForm />
        {/* <TaskList /> */}
        <TaskFilter />
      </div>
    </TaskProvider>
  );
}

export default App;
