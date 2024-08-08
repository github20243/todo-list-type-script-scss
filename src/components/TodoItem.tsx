import React from "react";
import { TodosTypes } from "../App";
import "./form.scss";

interface TodoItemProps {
  todo: TodosTypes;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className="block">
      <li className="li-text">
        {todo.inputValue}
      </li>
    </div>
  );
};

export default TodoItem;
