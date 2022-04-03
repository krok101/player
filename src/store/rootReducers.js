import { SET_VALUE } from "./actionCreators";

const initialState = {
  value: 10,
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case SET_VALUE: return { ...state, value: action.payload }
      default: return state;
  }
}

export default rootReducer;
