import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Login from '../components/Login';
import Details from '../components/Details';
import HomeContainer from '../containers/HomeContainer';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/login" />
      <Route path="login" component={Login}/>
      <Route path="home" component={HomeContainer}>
        <IndexRoute component={Home}/>
        <Route path="/home/details" component={Details}/>
      </Route>
    </Route>
  </Router>
)

export default routes;
