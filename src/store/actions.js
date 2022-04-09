import { SET_PLAYER_LIST, SET_CONFIG_VIDEO } from "./actionCreators";

export const setPlayerList = (payload) => ({
  type: SET_PLAYER_LIST,
  payload,
});

export const setConfigVideo = (payload) => ({
  type: SET_CONFIG_VIDEO,
  payload,
});