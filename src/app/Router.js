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
          <Route path="/projects" component={Projects} />
          <Route path="/addproject" component={Start} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/:projectname/:reponame" component={ProjectDetail} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Routers>
    </Provider>
  )
}

export default Router
