import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
      break;
    case 'NEXT':
      return next(state);
      break;
    case 'VOTE':
      return next(state, action.entry);
      break;
  }
  return state;
}