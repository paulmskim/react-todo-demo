import React, { PropTypes } from 'react';

const AddTodoForm = ({ onSubmit }) => {
  let input;

  return (
    <div class="add-todo">
      <form
        class="add-todo-form"
        onSubmit={e => {
          onSubmit(e, input);
        }}
      >
        <input
          class="add-todo-input"
          placeholder="Add todo here..."
          ref={node => { input = node; }}
        />
        <button
          class="add-todo-button"
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
}

export default AddTodoForm;
