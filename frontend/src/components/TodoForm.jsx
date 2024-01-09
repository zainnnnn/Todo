import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState({
    body: "",
  });

  const handleChange = (e) => {
    setNewTodo((prev) => ({
      ...prev,
      body: e.target.value,
    }));
    console.log(newTodo);
  };

  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        placeholder="Type here"
        className="form-control"
        onChange={handleChange}
        value={newTodo.body}
      />
      <button className="btn btn-primary ml-2">Add TODO</button>
    </div>
  );
};

export default TodoForm;
