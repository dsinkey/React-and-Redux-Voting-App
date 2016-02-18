import {createStore} from 'redux';
import reducer from './reducer';

export defualt function makeStore(){
    return createStore(reducer);
}