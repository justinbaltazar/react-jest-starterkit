export const ActionTypes = {
  INCREMENT: Symbol('INCREMENT'),
  DECREMENT: Symbol('DECREMENT'),
};


// sample actions
export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
