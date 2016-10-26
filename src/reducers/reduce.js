/**
 * Created by ming on 2016/10/20
 */
import {ADD_ITEM, DELETE_ITEM} from '../actions/type';
export const reduce = (state = [], action)=> {
    switch (action.type) {
        case ADD_ITEM:
            return (
                [...state, action.text]
            );
        case DELETE_ITEM:
            return [...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
};