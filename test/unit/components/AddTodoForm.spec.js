import '../helpers/setup';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import AddTodo from '../../../src/js/components/presentational/AddTodo';

describe('Component: AddTodo', () => {
  const minProps = {
    onSubmit: () => {},
  };

  it('should render without errors', () => {
    expect(
      shallow(
        <AddTodo {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should mount without errors', () => {
    expect(
      mount(
        <AddTodo {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should have button that submits form', () => {
    const wrapper = shallow(
      <AddTodo {...minProps} />
    );

    expect(
      wrapper.find('form').find('button').prop('type')
    ).to.equal('submit');
  });

  it('should call onSubmit if form is submitted', () => {
    const onSubmit = spy(minProps, 'onSubmit');
    const wrapper = shallow(
      <AddTodo {...minProps} />
    );
    wrapper.find('form').simulate('submit');
    onSubmit.restore();

    expect(
      onSubmit.calledOnce
    ).to.be.true;
  });
});
