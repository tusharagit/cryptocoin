import {SHOW_GLOBAL, DELETE_ITEM, UPDATE_ITEM} from './type';

export const showGlobal = (payloadData) => ({
    type: SHOW_GLOBAL,
    payload:payloadData
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