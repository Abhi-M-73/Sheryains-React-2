import { createSlice } from "@reduxjs/toolkit";


const serviceSlice = createSlice({
    name : 'service',
    initialState: {
        data : [
            {id:1, name:'Service 1', price: 100},
            {id:2, name:'Service 2', price: 200},
            {id:3, name:'Service 3', price: 300},
        ]
    },
    reducers : {
        addNewService : (state, action) => {
            state.data.push(action.payload);
        }
    }
});

export const {addNewService} = serviceSlice.actions;
export default serviceSlice.reducer;
