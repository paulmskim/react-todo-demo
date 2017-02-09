import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import todo from '../../src/js/reducers/todo';

describe('todo: add todo action', () => {
  it('should add todo', () => {
    const stateBefore = {};
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Hello world'
    };
    const stateAfter = {
      id: 0,
      text: 'Hello world',
      completed: false
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todo(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });
});

describe('todo: toggle todo action', () => {
  it('should toggle completed field if state id matches action id', () => {
    const stateBefore = {
      id: 0,
      text: 'Hello world',
      completed: false
    };
    const action = {
      type: 'TOGGLE_TODO',
      id: 0
    };
    const stateAfter = {
      id: 0,
      text: 'Hello world',
      completed: true
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todo(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('should not toggle completed field if state id does not matches action id', () => {
    const stateBefore = {
      id: 0,
      text: 'Hello world',
      completed: false
    };
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const stateAfter = {
      id: 0,
      text: 'Hello world',
      completed: false
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todo(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });
});

describe('todo: default action', () => {
  it('should return state when an unknown action is provided', () => {
    const stateBefore = {
      id: 0,
      text: 'Hello world',
      completed: false
    };
    const action = {
      action: 'DEFAULT_ACTION',
      id: 0
    };
    const stateAfter = {
      id: 0,
      text: 'Hello world',
      completed: false
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todo(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });

  it('should return state when no action is provided', () => {
    const stateBefore = {
      id: 0,
      text: 'Hello world',
      completed: false
    };
    const action = {
      id: 0
    };
    const stateAfter = {
      id: 0,
      text: 'Hello world',
      completed: false
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      todo(stateBefore, action)
    ).to.deep.equal(stateAfter);
  });
});
