import React, { PropTypes } from 'react';

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

Todo.PropTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
