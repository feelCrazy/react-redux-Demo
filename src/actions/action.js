/**
 * Created by ming on 2016/10/20
 *
 * actionCreate
 */
import {ADD_ITEM, DELETE_ITEM} from '../actions/type';
export const addItem = (text)=>({type: ADD_ITEM, text});
export const deleteItem = (index)=>({type: DELETE_ITEM, index});