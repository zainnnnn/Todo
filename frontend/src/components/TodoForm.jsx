import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const TodoForm = (Props) => {
  const [newTodo, setNewTodo] = useState({
    body: "",
  });

  const handleChange = (e) => {
    setNewTodo((prev) => ({
      ...prev,
      body: e.target.value,
    }));
  };

  const postTodo = () => {
    Props.setTodos((prev) => [newTodo, ...prev]);
    axios
      .post("http://localhost:8000/api/todo/", newTodo)
      .then((res) => [res.data, ...newTodo]);

    setNewTodo({ body: "" });
  };

  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        placeholder="Type here"
        className="form-control"
        onChange={handleChange}
        value={newTodo.body}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            postTodo();
          }
        }}
      />
      <button className="btn btn-primary ml-2" onClick={postTodo}>
        Add TODO
      </button>
    </div>
  );
};

export default TodoForm;
