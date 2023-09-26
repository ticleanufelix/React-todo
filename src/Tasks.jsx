import { FiTrash2 } from "react-icons/fi";

/* eslint-disable react/prop-types */
function Tasks(props) {
  return (
    <>
      {props.tasksArray.map((task) => (
        // Daca vrem sa returnam ceva direct, folosim () in locul {} in arrow function
        // Daca vrem sa modificam vreo variabila, folosim {} in arrow function
        <div className="task" key={task.id}>
          {/* key : Necesar pentru ca React-ul sa stie ce componenta sa updateze */}
          <h3>
            {task.text}
            {/* Mai jos folosim un callback function pentru a apela functia doar cand apasam pe cos 
      Callback function :  ()=>
      */}
            <FiTrash2
              onClick={() =>
                props.onDelete(task.id)
              }
              style={{
                color: "#ff0000",
              }}
            />
          </h3>
          <p
            style={{
              color: task.color,
            }}
          >
            {task.day}
          </p>
        </div>
      ))}
    </>
  );
}

export default Tasks;
