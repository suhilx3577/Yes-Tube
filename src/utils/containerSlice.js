import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
    name:'containerSlice',
    initialState:{
    cdata :null,
    channelId:null,
    },
    reducers:{
        changeContainer:(state,action)=>{
            state.cdata=action.payload
        },
        changecId : (state, action)=>{
            state.channelId = action.payload
        }

    }
})

export const {changeContainer,changecId} = containerSlice.actions;

export default containerSlice.reducer;