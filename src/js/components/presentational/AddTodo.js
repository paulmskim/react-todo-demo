import React, { PropTypes } from 'react';

const AddTodo = ({ onSubmit }) => {
  let input;

  return (
    <div className="add-todo">
      <form
        className="add-todo-form"
        onSubmit={e => onSubmit(e, input)}
      >
        <input
          className="add-todo-input"
          placeholder="Add todo here..."
          ref={(node) => { input = node; }}
        />
        <button
          className="add-todo-button"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
