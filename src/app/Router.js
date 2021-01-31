import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import {
  Projects,
  LandingPage,
  Start,
  Login,
  ProjectDetail
} from './pages'
import { Provider } from 'react-redux'
import storex from './redux/store'

const Router = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL

  return (
    <Provider store={storex}>
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
        <Route path="/start" component={Start} />
        <Route path="/login" component={Login} />
        <Route
          path="/project/:projectname/:reponame"
          component={ProjectDetail}
        />
      </BrowserRouter>
    </Provider>
  )
}

export default Router
