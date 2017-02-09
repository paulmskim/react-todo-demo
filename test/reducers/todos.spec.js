import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import todos from '../../src/js/reducers/todos';

describe('todos reducer', () => {
  describe('add todo action', () => {
    it('should add todo to empty state', () => {
      const stateBefore = [];
      const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Hello world'
      };
      const stateAfter = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should add todo to existing state', () => {
      const stateBefore = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }];
      const action = {
        type: 'ADD_TODO',
        id: 1,
        text: 'Goodbye world'
      };
      const stateAfter = [
        ...stateBefore,
        {
          id: 1,
          text: 'Goodbye world',
          completed: false
        }
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should add todo to empty state if no state is provided', () => {
      const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Hello world'
      };
      const stateAfter = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }];

      deepFreeze(action);

      expect(
        todos(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('toggle todo action', () => {
    it('should toggle completed field if todo id matches action id', () => {
      const stateBefore = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }];
      const action = {
        type: 'TOGGLE_TODO',
        id: 0
      };
      const stateAfter = [{
        id: 0,
        text: 'Hello world',
        completed: true
      }];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should not toggle completed field if todo id does not matches action id', () => {
      const stateBefore = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }];
      const action = {
        type: 'TOGGLE_TODO',
        id: 1
      };
      const stateAfter = [...stateBefore];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should only toggle completed field of todo if state id matches action id', () => {
      const stateBefore = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }, {
        id: 1,
        text: 'Goodbye world',
        completed: false
      }];
      const action = {
        type: 'TOGGLE_TODO',
        id: 0
      };
      const stateAfter = [{
        id: 0,
        text: 'Hello world',
        completed: true
      }, {
        id: 1,
        text: 'Goodbye world',
        completed: false
      }];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return blank array if no state is provided', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 0,
      };
      const stateAfter = [];

      deepFreeze(action);

      expect(
        todos(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });

  describe('default action', () => {
    it('should return state when an unknown action is provided', () => {
      const stateBefore = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }];
      const action = {
        action: 'DEFAULT_ACTION',
        id: 0
      };
      const stateAfter = [...stateBefore];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return state when no action type is provided', () => {
      const stateBefore = [{
        id: 0,
        text: 'Hello world',
        completed: false
      }];
      const action = {
        id: 0
      };
      const stateAfter = [...stateBefore];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return blank array if no state is provided', () => {
      const action = {
        type: 'DEFAULT_ACTION',
        id: 0
      };
      const stateAfter = [];

      deepFreeze(action);

      expect(
        todos(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
