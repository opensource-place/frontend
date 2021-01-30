/*eslint-disable*/
import CONSTANTS from "../actions/index";

const initialState = {
  projects: [],
  isLoading: false,
  isLoaded: false,
  hasError: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FETHING_PROJECTS:
      return {
        ...state,
        isLoading: true,
      };
    case CONSTANTS.FETCHED_PROJECTS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        projects: action.payload,
      };

    default:
      return state;
  }
};
export default projectReducer;
