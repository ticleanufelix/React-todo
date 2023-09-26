/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
// import { FiTrash2 } from "react-icons/fi";
import Tasks from "./Tasks";
import AddTaskForm from "./AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] =
    useState(false);

  useEffect(() => {
    const data = getTasks();
    setTasks(data);
  }, []);

  console.log(tasks);

  function deleteTask(id) {
    const newArray = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(newArray);

    // setTasks(
    //   tasks.filter((task) => task.id !== id)
    // );
    // Folosim .filter pentru a face o copie a array-ului pe care o modificam si dupa o afisam
    // Pentru fiecare task, verificam daca id-ul task-ului este diferit de id-ul task-ului pe care apasam. Astfel, afisandu-se doar cele cu id diferit
  }

  function addTask(task) {
    const newArray = [...tasks, task];
    setTasks(newArray);
  }

  return (
    // <> </>  ⇒ Fragment. Poate tine locul unui div
    <div className="container">
      <header className="header">
        <h1>To do app</h1>
        <Button
          color={
            showAddTask ? "#ff0000" : "#015E1A"
          }
          text={showAddTask ? "Close" : "Open"}
          onClick={() =>
            setShowAddTask(!showAddTask)
          }
        />
      </header>
      {showAddTask && (
        <AddTaskForm onAddTask={addTask} />
      )}{" "}
      {/* Daca ce e in stanga e adevarat, aratam ce e in dreapta... Chiar daca este semnul && */}
      {/* Daca lungimea array-ului "tasks" este mai mare decat 0, sa se afiseze task-urile
          Daca nu, sa se afiseze textul default "Nothing to do, you can sleep" */}
      {tasks.length > 0 ? (
        <Tasks
          tasksArray={tasks}
          onDelete={deleteTask}
          // Linia 32 si 33 se trimit in componenta copil (Tasks.jsx) ca un obiect, astfel devenind "props"
        />
      ) : (
        "Nothing to do, you can sleep"
      )}
    </div>
  );
}

function Button(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className="btn"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

function getTasks() {
  return [
    {
      id: 0,
      text: "dentist",
      day: "5 August 20:18",
      color: "#0000ff",
    },
    {
      id: 2,
      text: "sedinta",
      day: "2 August 9:00",
      color: "#00ff00",
    },
    {
      id: 3,
      text: "curs",
      day: "3 August 18:00",
      color: "#000000",
    },
  ];
}

export default App;
// Export default = export default App  => import fara {}
// Export = export {App} => import cu {}
