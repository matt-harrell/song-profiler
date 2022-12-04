import { createSlice } from "@reduxjs/toolkit";

interface FilterButtonsState {
    timeRange:string;
    numofTracks:number;
}

const initialState = {
    timeRange:'medium_term',
    numofTracks:20,
} as FilterButtonsState;

const filterButtonsSlice = createSlice({
    name:'filterButtons',
    initialState,
    reducers: {
        setTimeRange(state,action){
            state.timeRange = action.payload;
        }
    }
})

export const selectTimeRange = (state: { filterButtons: { timeRange: string; }; }) => state.filterButtons.timeRange;
export const selectNumOfTracks = (state: { filterButtons: { numOfTracks: number; }; }) => state.filterButtons.numOfTracks;

export const {setTimeRange} = filterButtonsSlice.actions;

export default filterButtonsSlice.reducer;