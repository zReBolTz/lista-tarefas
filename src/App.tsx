import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [editTask, setEditTask] = useState({
    enable: false,
    task: "",
  });

  function onAddTask(task: string) {
    if (!input.trim()) {
      alert("O campo deve ser preenchido");
      return;
    }
    if (editTask.enable) {
      onSaveEditTask();
      return;
    }
    setTasks((tasks) => [...tasks, task]);
    setInput("");
  }

  function onDeleteTask(task: string) {
    const newTask = tasks.filter((tasks) => tasks != task);
    setTasks(newTask);
  }

  function onEditTaks(task: string) {
    setInput(task);
    setEditTask({
      enable: true,
      task: task,
    });
  }

  function onSaveEditTask() {
    const findexTask = tasks.findIndex((task) => task == editTask.task);
    const allTasks = [...tasks];
    allTasks[findexTask] = input;
    setTasks(allTasks);
    setEditTask({
      enable: false,
      task: "",
    });
    setInput("");
  }
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit" onClick={() => onAddTask(input)}>
        {editTask.enable ? "Atualizar Tarefa" : "Adicionar Tarefa"}
      </button>
      <hr />
      <ul>
        {tasks.map((task) => (
          <li key={task}>
            {task}
            <button onClick={() => onEditTaks(task)}>Editar</button>
            <button onClick={() => onDeleteTask(task)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
