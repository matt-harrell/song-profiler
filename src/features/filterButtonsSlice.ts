import { createSlice } from "@reduxjs/toolkit";

interface FilterButtonsState {
    timeRange:string;
    numOfTracks:number;
}

const initialState = {
    timeRange:'medium_term',
    numOfTracks:20,
} as FilterButtonsState;

const filterButtonsSlice = createSlice({
    name:'filterButtons',
    initialState,
    reducers: {
        setTimeRange(state,action){
            state.timeRange = action.payload;
        },
        setNumOfTracks(state,action){
            state.numOfTracks = action.payload;
        }
    }
})

export const selectTimeRange = (state: { filterButtons: { timeRange: string; }; }) => state.filterButtons.timeRange;
export const selectNumOfTracks = (state: { filterButtons: { numOfTracks: number; }; }) => state.filterButtons.numOfTracks;

export const {setTimeRange,setNumOfTracks} = filterButtonsSlice.actions;

export default filterButtonsSlice.reducer;