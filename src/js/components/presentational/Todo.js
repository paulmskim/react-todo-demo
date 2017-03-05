import React, { PropTypes } from 'react';

const Todo = ({ onTodoClick, onDeleteClick, completed, text, id }) => {
  let todoClass = 'todo-text todo-text-' + id;

  if (completed) {
    todoClass += ' todo-done';
  }

  return (
    <li
      className={'todo todo-' + id}
    >
      <p
        className={todoClass}
        onClick={onTodoClick}
      >
        {text}
      </p>
      <a
        href="#"
        className={'todo-delete todo-delete-' + id}
        onClick={(e) => {
          e.preventDefault();
          onDeleteClick();
        }}
      >
        ×
      </a>
    </li>
  );
};

Todo.PropTypes = {
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
