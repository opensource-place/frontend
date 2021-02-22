import React from 'react'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { Projects, LandingPage, Start, Login, ProjectDetail, Contact, NotFoundPage } from './pages'
import { Provider } from 'react-redux'
import storex from './redux/store'

const Router = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL

  return (
    <Provider store={storex}>
      <Routers>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/start" component={Start} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/project/:projectname/:reponame" component={ProjectDetail} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Routers>
    </Provider>
  )
}

export default Router
