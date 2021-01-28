import { configureStore } from '@reduxjs/toolkit'
import projectsReducers from './reducers/projectsReducers'

export default configureStore({
  reducer: {
    projects: projectsReducers
  }
})
