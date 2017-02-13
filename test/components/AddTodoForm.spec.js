import '../helpers/setup';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import AddTodoForm from '../../src/js/components/AddTodoForm';

describe('Component: AddTodoForm', () => {
  const minProps = {
    onSubmit: () => {}
  }

  it('should render without errors', () => {
    expect(
      shallow(
        <AddTodoForm {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should mount without errors', () => {
    expect(
      mount(
        <AddTodoForm {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should have button that submits form', () => {
    const wrapper = shallow(
      <AddTodoForm {...minProps} />
    );

    expect(
      wrapper.find('form').find('button').prop('type')
    ).to.equal('submit');
  });

  it('should call onSubmit when form is submitted', () => {
    const onSubmit = spy(minProps, 'onSubmit');
    const wrapper = shallow(
      <AddTodoForm {...minProps} />
    );
    wrapper.find('form').simulate('submit');
    onSubmit.restore();

    expect(onSubmit.calledOnce).to.equal(true);
  });
});
