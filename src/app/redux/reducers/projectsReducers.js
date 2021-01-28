const initialState = {
  projects: [],
  isLoading: false,
  isLoaded: false,
  hasError: false
}

export default function projectsReducers (state = initialState, action) {
  switch (action.type) {
    case 'FETHING_PROJECTS':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCHED_PROJECTS':
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        projects: action.payload
      }
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    default:
      return state
  }
}
