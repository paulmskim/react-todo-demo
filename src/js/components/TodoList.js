import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => {
  if (!todos.length) {
    return <p class="no-todo">No todos</p>;
  }

  return (
    <ul class="todo-list">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  );
};

export default TodoList;
