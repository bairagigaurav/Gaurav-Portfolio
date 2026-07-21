import React, { useState } from "react";
import { useRef } from "react";

const Todo = () => {
const [value, setValue] = useState("")
const handleInputChange = (event) =>{
    setValue(event.target.value)
}
const [task, setTask] = useState([]);
const handleFormSubmit = (event) => {
    event.preventDefault();
    if(!value) return;
    if(task.includes(value))return;
    setTask((prevTasks) => [...prevTasks, value]);
    setValue("")
}
const handelDeleteTask = (deletedTask) =>{
  const updatedTasks = task.filter(task => task !== deletedTask);
  setTask(updatedTasks);
}
const refElements = useRef();
console.log(refElements)
const [name, setName] = useState("Gourav Bairagi");
function Reset() {
  setName("")
  refElements.current.focus()
}
  return (
    <div className="todo-container">
      <h2>Todo</h2>
<form onSubmit={handleFormSubmit}>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter Todo"
        value={value}
        onChange={handleInputChange}
         
        />

        <button type="submit">Add Task</button>
      </div>
</form>
      <ul className="todo-list">
        {task.map((task, index) => (
          <li key={index}>{task} <button onClick={() => handelDeleteTask(task)}>
        Delete
      </button>Delete</li>
        ))}
      </ul>
        <input ref={refElements} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={Reset}>Reset</button>
    </div>

  
  );
};

export default Todo;