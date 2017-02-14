import '../helpers/setup';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { spy } from 'sinon';
import Link from '../../../src/js/components/Link';

describe('Component: Link', () => {
  const minProps = {
    active: false,
    children: 'All',
    onClick: () => {}
  }

  it('should render non-active link without errors', () => {
    expect(
      shallow(
        <Link {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should mount non-active link without errors', () => {
    expect(
      mount(
        <Link {...minProps} />
      ).length
    ).to.equal(1);
  });

  it('should render active link without errors', () => {
    expect(
      shallow(
        <Link {...minProps} active={true} />
      ).length
    ).to.equal(1);
  });

  it('should mount active link without errors', () => {
    expect(
      mount(
        <Link {...minProps} active={true} />
      ).length
    ).to.equal(1);
  });

  it('should display text', () => {
    const wrapper = shallow(
      <Link {...minProps} />
    );

    expect(
      wrapper.text()
    ).to.equal(minProps.children);
  });

  it('should call onClick if link is clicked', () => {
    const onClick = spy(minProps, 'onClick');
    const wrapper = mount(
      <Link {...minProps} />
    );
    wrapper.simulate('click');
    onClick.restore();

    expect(
      onClick.calledOnce
    ).to.be.true;
  });
});
