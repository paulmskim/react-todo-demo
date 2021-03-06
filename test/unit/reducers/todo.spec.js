import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import todo from '../../../src/js/reducers/todo';

describe('Reducer: todo', () => {
  describe('add todo action', () => {
    it('should add todo', () => {
      const stateBefore = {};
      const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Hello world',
      };
      const stateAfter = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todo(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('toggle todo action', () => {
    it('should toggle completed field if state id matches action id', () => {
      const stateBefore = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };
      const action = {
        type: 'TOGGLE_TODO',
        id: 0,
      };
      const stateAfter = {
        id: 0,
        text: 'Hello world',
        completed: true,
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
        completed: false,
      };
      const action = {
        type: 'TOGGLE_TODO',
        id: 1,
      };
      const stateAfter = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todo(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('delete todo action', () => {
    it('should return false if state id matches action id', () => {
      const stateBefore = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };
      const action = {
        type: 'DELETE_TODO',
        id: 0,
      };
      const stateAfter = false;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todo(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return true if state id does not match action id', () => {
      const stateBefore = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };
      const action = {
        type: 'DELETE_TODO',
        id: 1,
      };
      const stateAfter = true;

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todo(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('default action', () => {
    it('should return state if an unknown action is provided', () => {
      const stateBefore = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };
      const action = {
        action: 'DEFAULT_ACTION',
        id: 0,
      };
      const stateAfter = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todo(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return state if no action is provided', () => {
      const stateBefore = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };
      const action = {
        id: 0,
      };
      const stateAfter = {
        id: 0,
        text: 'Hello world',
        completed: false,
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todo(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
