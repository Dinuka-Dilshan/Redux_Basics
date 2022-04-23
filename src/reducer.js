import * as actions from "./types";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [...state, action.payload];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      return state.map((bug) => bug.id === action.payload.id?{...bug,isResolved:true}:bug);
    default:
      return state;
  }
};

export default reducer;
