import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from './type';

export const addItem = (message) => ({
    type: ADD_ITEM,
    message
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    id,
});

export const updateItem = ({id, message}) => ({
    type: UPDATE_ITEM,
    id,
    message,
});