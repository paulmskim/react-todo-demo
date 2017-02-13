import React, { PropTypes } from 'react';

const AddTodoForm = ({ onSubmit }) => {
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
          ref={node => { input = node; }}
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

AddTodoForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddTodoForm;
