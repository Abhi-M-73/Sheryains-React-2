export {addNewService, removeService} from '../reducers/serviceSlice';

import {removeService} from '../reducers/serviceSlice';


export const asyncRemoveService = (id) => async (dispatch, getState) => {
    // const state = getState();

    setTimeout(() => {
        dispatch(removeService(id));
    }, 2000);
}