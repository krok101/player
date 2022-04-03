import { SET_VALUE } from "./actionCreators";

export const setValue = (payload) => ({
  type: SET_VALUE,
  payload,
})