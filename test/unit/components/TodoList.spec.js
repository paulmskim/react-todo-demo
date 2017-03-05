import '../helpers/setup';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import TodoList from '../../../src/js/components/presentational/TodoList';

describe('Component: TodoList', () => {
  const minProps = {
    todos: [],
    onTodoClick: () => {},
    onDeleteClick: () => {},
  };

  it('should render without errors', () => {
    expect(
      shallow(
        <TodoList {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should mount without errors', () => {
    expect(
      mount(
        <TodoList {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should list correct number of todos passed as properties', () => {
    const todos = [
      {
        id: 0,
        text: 'Hello world',
        completed: false,
      }, {
        id: 1,
        text: 'Goodbye world',
        completed: false,
      },
    ];
    const wrapper = shallow(
      <TodoList {...minProps} todos={todos} />
    );

    expect(
      wrapper.children().length
    ).to.equal(2);
  });
});
