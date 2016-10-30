import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import workPage from './components/work_page/workPage';
import work_index from './components/work_page/work_index';
import rate_index from './components/rate/rate_index';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
  
    <IndexRoute component={Greetings} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/new-event" component={requireAuth(NewEventPage)} />
    <Route path="/work" component={workPage} />
    <Route path="/work_index" component={work_index} />
    <Route path="/rate_index" component={rate_index} />

  </Route>
)
