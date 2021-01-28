import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import {
  Projects,
  LandingPage,
  Start,
  Doc,
  Login,
  ProjectDetail
} from './pages'
import { Provider } from 'react-redux'
import store from './redux'

const Router = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route path='/projects' component={Projects} />
        <Route path='/start' component={Start} />
        <Route path='/doc' component={Doc} />
        <Route path='/login' component={Login} />
        <Route
          path='/project/:projectname/:reponame'
          component={ProjectDetail}
        />
      </BrowserRouter>
    </ Provider>
  )
}

export default Router
