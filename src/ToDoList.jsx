import { useState } from "react";

const Todo = () => {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleAdd = () => {
    if (document.getElementById("input").value !== "") {
      setTask([...tasks, newTask]);
      document.getElementById("input").value = "";
    }
  };
  const handleDelete = (index) => {
    const updatedTask = tasks.filter((elment, i) => i !== index);
    setTask(updatedTask);
  };
  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index - 1], updatedTask[index]] = [
        updatedTask[index],
        updatedTask[index - 1],
      ];
      setTask(updatedTask);
    }
  };
  const handleMoveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index + 1], updatedTask[index]] = [
        updatedTask[index],
        updatedTask[index + 1],
      ];
      setTask(updatedTask);
    }
  };

  return (
    <div className="to-do-container">
      <h1>TO-DO-LIST</h1>
      <input
        id="input"
        type="text"
        placeholder="Enter a task..."
        onChange={handleInputChange}
      />
      <button className="add-task" onClick={handleAdd}>
        ADD Task
      </button>
      <br />

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task} </p>
            <span>
              <img
                src="src/assets/bin.png"
                alt=""
                onClick={() => handleDelete(index)}
              />
              <img
                src="src/assets/up.png"
                onClick={() => handleMoveUp(index)}
                alt=""
              />
              <img
                src="src/assets/down.png"
                onClick={() => handleMoveDown(index)}
                alt=""
              />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
