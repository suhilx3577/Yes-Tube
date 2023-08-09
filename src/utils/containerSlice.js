import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
    name:'containerSlice',
    initialState:{
    cdata :null,
    },
    reducers:{
        changeContainer:(state,action)=>{
            state.cdata=action.payload
        }

    }
})

export const {changeContainer} = containerSlice.actions;

export default containerSlice.reducer;