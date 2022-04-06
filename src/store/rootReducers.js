import { SET_PLAYER_LIST } from "./actionCreators";

const initialState = {
  playerList: [],
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PLAYER_LIST: return { ...state, playerList: action.payload }
    default: return state;
  }
}

export default rootReducer;
