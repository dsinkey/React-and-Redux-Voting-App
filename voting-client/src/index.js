import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import App from '.components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const routes = <Route component={App}><Route path="/results" component={Results} /></Route>;

ReactDOM.reder(
  <Voting pair={pair} winner="Trainspotting" />, document.getElementById('app')
);