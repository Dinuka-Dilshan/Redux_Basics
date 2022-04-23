import * as actions from './types';
let count = 0;

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    id: ++count,
    description,
    isResolved: false,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});

export const bugResolved = (id) => ({
    type: actions.BUG_RESOLVED,
    payload: {
      id,
    },
  });
