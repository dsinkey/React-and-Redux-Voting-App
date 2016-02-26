import {Map} from 'immutable';

function setState(state, newState){
  return state.merge(newState);
}

function vote(state, entry){
  const currentState = state.getIn(['vote', 'pair']);
  if(currentState && currentState.includes(entry)){
    return state.set('hasVoted', entry);
  } else {
    return state;
  }
}

export default function(state = Map(), action){
  switch (action.type){
    case 'SET_STATE':
      return setState(state, action.state);
    case 'VOTE':
      return vote(state, action.entry);
  }
  return state;
}