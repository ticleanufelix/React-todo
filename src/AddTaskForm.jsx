import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
function AddTaskForm(props) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // folosim e.preventDefault() pentru a anuala comportamentul default al submit-ului(refresh la pagina)
    console.log(new Date(day).toUTCString().split(" 00"));
    props.onAddTask({
      id: crypto.randomUUID(),
      //id: uuidv4(),
      text: text,
      day: new Date(day).toUTCString().split(" 00")[0], // split ne returneaza un array de string-uri. Folosind [0] de la final, afisam doar primul string din array
    });
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          value={text} // setam valoarea inputului cu state-ul text
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add new task"
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          value={day}
          onChange={
            (e) => setDay(e.target.value) // setam valoarea state-ului day cu e.target.value
          }
          type="date"
          placeholder="Add time"
        />
      </div>
      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
}

export default AddTaskForm;
