import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
    name:'containerSlice',
    initialState:{
    cdata :null,
    channelId:null,
    ch_query:null,
    },
    reducers:{
        changeContainer:(state,action)=>{
            state.cdata=action.payload
        },
        changecId : (state, action)=>{
            state.channelId = action.payload
        },
        changech_query : (state, action)=>{
            state.ch_query = action.payload
        }

    }
})

export const {changeContainer,changecId,changech_query} = containerSlice.actions;

export default containerSlice.reducer;