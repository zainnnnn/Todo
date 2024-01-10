import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import TodoForm from "./components/TodoForm";
import axios, { CanceledError } from "axios";


function App() {
  const [todos, setTodos] = useState("");
  // const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const fetchData = useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:8000/api/todo/", { signal: controller.signal })
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        // setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return (
    <div className="bg-indigo-200 px-8 min-h-screen">
      <nav className="pt-8">
        <h1 className="text-5xl text-center pb-12">ToDo List</h1>
      </nav>
      <TodoForm setTodos={setTodos} fetchData={fetchData} />
      <Table
        todos={todos}
        setTodos={setTodos}
        isLoading={isLoading}
        // error={error}
        f
      />
    </div>
  );
}

export default App;
