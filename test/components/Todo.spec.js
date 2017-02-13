import '../helpers/setup';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import Todo from '../../src/js/components/Todo';

describe('Component: Todo', () => {
  const minProps = {
    onTodoClick: () => {},
    onDeleteClick: () => {},
    completed: false,
    text: 'test'
  }

  it('should render without errors', () => {
    expect(
      shallow(
        <Todo {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should mount without errors', () => {
    expect(
      mount(
        <Todo {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should display text', () => {
    const wrapper = shallow(
      <Todo {...minProps} />
    );

    expect(
      wrapper.find('.todo-text').text()
    ).to.equal(minProps.text);
  });

  it('should call onTodoClick if todo text is clicked', () => {
    const onTodoClick = spy(minProps, 'onTodoClick');
    const wrapper = shallow(
      <Todo {...minProps} />
    );
    wrapper.find('.todo-text').simulate('click');
    onTodoClick.restore();

    expect(
      onTodoClick.calledOnce
    ).to.be.true;
  });

  it('should call onDeleteClick if delete is clicked', () => {
    const onDeleteClick = spy(minProps, 'onDeleteClick');
    const wrapper = mount(
      <Todo {...minProps} />
    );
    wrapper.find('.todo-delete').simulate('click');
    onDeleteClick.restore();

    expect(
      onDeleteClick.calledOnce
    ).to.be.true;
  });

  it('should have todo-done class if completed is true', () => {
    const wrapper = mount(
      <Todo {...minProps} completed={true} />
    );

    expect(
      wrapper.find('.todo-text').hasClass('todo-done')
    ).to.be.true;
  });
});
