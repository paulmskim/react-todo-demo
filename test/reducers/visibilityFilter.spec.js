import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import visibilityFilter from '../../src/js/reducers/visibilityFilter';

describe('Reducer: visibilityFilter', () => {
  describe('set visibility filter action', () => {
    it('should set visibility filter to provided filter', () => {
      const stateBefore = 'SHOW_ALL';
      const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
      };
      const stateAfter = 'SHOW_COMPLETED';

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        visibilityFilter(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should set visibility filter to provided filter if no state is provided', () => {
      const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
      };
      const stateAfter = 'SHOW_COMPLETED';

      deepFreeze(action);

      expect(
        visibilityFilter(undefined, action)
      ).to.deep.equal(stateAfter);
    })
  });

  describe('default action', () => {
    it('should return SHOW_ALL if no state is provided', () => {
      const stateBefore = 'SHOW_COMPLETED';
      const action = {
        type: 'DEFAULT_ACTION',
        filter: 'SHOW_ACTIVE'
      };
      const stateAfter = 'SHOW_COMPLETED';

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        visibilityFilter(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return state when no action type is provided', () => {
      const stateBefore = 'SHOW_COMPLETED';
      const action = {
        filter: 'SHOW_ACTIVE'
      };
      const stateAfter = 'SHOW_COMPLETED';

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        visibilityFilter(stateBefore, action)
      ).to.deep.equal(stateAfter);
    });

    it('should return SHOW_ALL if no state is provided', () => {
      const action = {
        type: 'DEFAULT_ACTION',
        filter: 'SHOW_COMPLETED'
      };
      const stateAfter = 'SHOW_ALL';

      deepFreeze(action);

      expect(
        visibilityFilter(undefined, action)
      ).to.deep.equal(stateAfter);
    });
  });
});
