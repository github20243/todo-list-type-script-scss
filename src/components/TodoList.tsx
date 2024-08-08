import React from "react";
import TodoItem from "./TodoItem";
import { TodosTypes } from "../App";
import "./form.scss"

interface TodoListProps {
  todos: TodosTypes[];
  deleteHandler: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteHandler }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <div key={todo.id}>
          <button className="delete" onClick={() => deleteHandler(todo.id)}>Удалить</button>
          <TodoItem todo={todo} />
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
