import CONSTANTS from '../actions/index'

const initialState = {
  projects: [],
  isLoading: false,
  isLoaded: false,
  hasError: false,
  filter: ''
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FETHING_PROJECTS:
      return {
        ...state,
        isLoading: true
      }
    case CONSTANTS.FETCHED_PROJECTS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        projects: action.payload
      }
    case CONSTANTS.ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    case CONSTANTS.FILTER:
      return {
        ...state,
        filter: action.filter
      }

    default:
      return state
  }
}
export default projectReducer
