/**
 * Created by ming on 2016/10/20
 */
import {combineReducers} from 'redux';
import {reduce} from './reduce';
import {routerReducer} from 'react-router-redux';

const rootReduce = combineReducers({
    reduce,
    routing: routerReducer
});
export default rootReduce;