import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["makan", "minum"]);
  console.log("a", todos);

  const saveTodo = (text) => {
    let trimmed = text.trim();

    if (trimmed.length > 0) {
      setTodos([...todos, trimmed]);
    }
  };

  const deleteTodo = (todoIndex) => {
    const survTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(survTodos);
  };

  return (
    <div>
      <div>
        <h1>Todo List APP</h1>
      </div>
      <TodoForm simpan={saveTodo} />
      <TodoList todos={todos} hapusTodo={deleteTodo} />
    </div>
  );
}

export default App;
