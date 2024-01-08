import { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import TodoForm from "./components/TodoForm";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
    console.log(todos);
    setIsLoading(false);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/todo/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-indigo-200 px-8 min-h-screen">
      <nav className="pt-8">
        <h1 className="text-5xl text-center pb-12">ToDo List</h1>
      </nav>
      <TodoForm />
      <Table todos={todos} setTodos={setTodos} isLoading={isLoading} />
    </div>
  );
}

export default App;
