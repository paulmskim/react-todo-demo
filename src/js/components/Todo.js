import React from 'react';

const Todo = ({ onClick, completed, text }) => (
  <li
    class="todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

export default Todo;
