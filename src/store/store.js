/**
 * Created by ming on 2016/10/20
 */
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReduce from '../reducers/rootReduce'

const store = createStore(
    rootReduce,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
export default store;