import { combineReducers } from 'redux'
import projectsReducers from './reducers/projectsReducers'

export default combineReducers({
  projects: projectsReducers
})
