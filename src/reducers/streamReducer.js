import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  const { payload } = action;
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case DELETE_STREAM:
      return _.omit(state, payload);
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(payload, "id") };
    default:
      return state;
  }
};
