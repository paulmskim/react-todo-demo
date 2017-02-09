import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => {
  if (!todos.length) {
    return <p class="no-todo">No todos</p>;
  }

  return (
    <ul class="todo-list">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onTodoClick={() => onTodoClick(todo.id)}
          onDeleteClick={() => onDeleteClick(todo.id)}
        />
      )}
    </ul>
  );
};

export default TodoList;
