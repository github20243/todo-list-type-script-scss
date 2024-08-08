import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./index.scss";

export type TodosTypes = {
  inputValue: string;
  id: number;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodosTypes[]>([]);

  const addTodo = (todo: TodosTypes) => {
    setTodos([...todos, todo]);
  };

  const deleteHandler = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Список задач</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteHandler={deleteHandler} />
    </div>
  );
};

export default App;
