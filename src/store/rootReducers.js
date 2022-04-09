import { SET_PLAYER_LIST, SET_CONFIG_VIDEO } from "./actionCreators";

const initialState = {
  playerList: [],
  configVideo: {}
}

const rootReducer = (state = initialState, action) => {
  console.log('action::', action);
  switch(action.type) {
    case SET_PLAYER_LIST: return { ...state, playerList: action.payload }
    case SET_CONFIG_VIDEO: return { ...state, configVideo: action.payload}
    default: return state;
  }
}

export default rootReducer;
