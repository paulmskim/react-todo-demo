import React from 'react';

const AddTodo = ({ onSubmit }) => {
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

export default AddTodo;
