import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => {
  if (!todos.length) {
    return <p className="no-todo">No todos</p>;
  }

  return (
    <ul className="todo-list">
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

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default TodoList;
