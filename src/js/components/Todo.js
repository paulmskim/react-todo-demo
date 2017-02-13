import React, { PropTypes } from 'react';

const Todo = ({ onTodoClick, onDeleteClick, completed, text }) => (
  <li
    className="todo"
  >
    <p
      className={completed ? "todo-text todo-done" : "todo-text"}
      onClick={onTodoClick}
    >
      {text}
    </p>
    <a
      href="#"
      className="todo-delete"
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
};

export default Todo;
