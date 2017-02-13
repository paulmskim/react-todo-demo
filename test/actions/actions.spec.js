import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setVisibilityFilter
} from '../../src/js/actions/actions';

describe('Actions', () => {
  describe('add todo action', () => {
    it('should return action add todo from id 0', () => {
      const input = 'Hello world';
      const output = {
        type: 'ADD_TODO',
        id: 0,
        text: input
      };

      deepFreeze(input);

      expect(
        addTodo(input)
      ).to.deep.equal(output);
    });

    it('should return action add todo with incremented id of 1', () => {
      const input = 'Goodbye world';
      const output = {
        type: 'ADD_TODO',
        id: 1,
        text: input
      };

      deepFreeze(input);

      expect(
        addTodo(input)
      ).to.deep.equal(output);
    });
  });

  describe('toggle todo action', () => {
    it('should return action toggle todo with id provided', () => {
      const input = 1;
      const output = {
        type: 'TOGGLE_TODO',
        id: input
      };

      deepFreeze(input);

      expect(
        toggleTodo(input)
      ).to.deep.equal(output);
    });
  });

  describe('delete todo action', () => {
    it('should return action delete todo with id provided', () => {
      const input = 1;
      const output = {
        type: 'DELETE_TODO',
        id: input
      };

      deepFreeze(input);

      expect(
        deleteTodo(input)
      ).to.deep.equal(output);
    });
  });

  describe('set visibility filter action', () => {
    it('should return action set visibility filter with filter provided', () => {
      const input = 'SHOW_COMPLETED';
      const output = {
        type: 'SET_VISIBILITY_FILTER',
        filter: input
      };

      deepFreeze(input);

      expect(
        setVisibilityFilter(input)
      ).to.deep.equal(output);
    });
  });
});
