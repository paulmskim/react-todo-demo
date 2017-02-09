import React from 'react';

const Todo = ({ onTodoClick, onDeleteClick, completed, text }) => (
  <li
    class="todo"
    onClick={onTodoClick}
  >
    <p class={completed ? "todo-text todo-done" : "todo-text"}>
      {text}
    </p>
    <a
      href="#"
      class="todo-delete"
      onClick={(e) => {
        e.preventDefault();
        onDeleteClick();
      }}
    >
      ×
    </a>
  </li>
);

export default Todo;
