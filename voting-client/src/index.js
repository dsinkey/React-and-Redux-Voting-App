import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import App from '.components/App';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}><Route path="/" component={Voting} /></Route>;

ReactDOM.reder(
  <Voting pair={pair} winner="Trainspotting" />, document.getElementById('app')
);