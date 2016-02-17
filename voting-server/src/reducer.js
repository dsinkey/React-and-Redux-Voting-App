import {setEntries, next, vote} from './core';

export default function reducer(state, action){
  switch(action.type){
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
      break;
  }
}