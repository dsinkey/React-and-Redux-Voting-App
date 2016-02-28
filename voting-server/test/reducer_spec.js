import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_ENTRIES', () =>{
    const initalState = Map();
    const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
    const nextState = reducer(initalState, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting']
    }));
  });

  it('handles NEXT', () =>{
    const initalState = fromJS({
      entries: ['Trainspotting', '28 Days Later']
    });
    const action = {type: 'NEXT'};
    const nextState = reducer(initalState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        round: 1,
        pair: ['Trainspotting', '28 Days Later']
      },
      entries: []
    }));
  });

  it('handles VOTE', () =>{
    const initalState = fromJS({
      vote: {
        round: 1,
        pair: ['Trainspotting', '28 Days Later']
      },
      entries: []
    });

    const action = {type: 'VOTE', entry: 'Trainspotting'};
    const nextState = reducer(initalState, action);

    expect(nextState).to.equal(fromJS({
      vote: {
        round: 1,
        pair: ['Trainspotting', '28 Days Later'],
        tally: {Trainspotting: 1}
      },
      entries: []
    }));
  });

  it('has an initial state', () => {
    const action = {type: 'SET_ENTRIES', entries: ['Trainspotting']};
    const nextState = reducer(undefined, action);

    expect(nextState).to.equal(fromJS({
      entries: ['Trainspotting']
    }));
  });

  it('can be used with reducer', () => {
    const actions = [
      {type: 'SET_ENTRIES', entries: ['Trainspotting', '28 Days Later']},
      {type: 'NEXT'},
      {type: 'VOTE', entries: 'Trainspotting', clientId: 'voter1']},
      {type: 'VOTE', entries: '28 Days Later', clientId: 'voter2']},
      {type: 'VOTE', entries: 'Trainspotting', clientId: 'voter3']},
      {type: 'NEXT'}
    ];

    const finalState = actions.reduce(reducer, Map());

    expect(finalState).to.equal(fromJS({
      winner: 'Trainspotting',
      initialEntries: ['Trainspotting', '28 Days Later']
    }));
  });

});