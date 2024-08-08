import React, { useState } from "react";
import "../components/form.scss";
import { TodosTypes } from "../App";

interface AddTodoProps {
  addTodo: (todo: TodosTypes) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const value: TodosTypes = {
        inputValue,
        id: Math.floor(Math.random() * 1000),
      };
      addTodo(value);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Добавить новую задачу"
        className="todo-input"
      />
      <button type="submit" className="add-todo-button">
        Добавить задачу
      </button>
    </form>
  );
};

export default AddTodo;
