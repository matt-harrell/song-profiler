import { createSlice } from "@reduxjs/toolkit";

interface FilterButtonsState {
    timeRange:string;
    numOfTracks:number;
    audioFeature:string;
}

const initialState = {
    timeRange:'medium_term',
    numOfTracks:20,
    audioFeature:'acousticness'
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
        },
        setAudioFeature(state,action){
            state.audioFeature = action.payload;
        }
    }
})

export const selectTimeRange = (state: { filterButtons: { timeRange: string; }; }) => state.filterButtons.timeRange;
export const selectNumOfTracks = (state: { filterButtons: { numOfTracks: number; }; }) => state.filterButtons.numOfTracks;
export const selectAudioFeature = (state: { filterButtons: { audioFeature: string; }; }) => state.filterButtons.audioFeature;

export const {setTimeRange,setNumOfTracks,setAudioFeature} = filterButtonsSlice.actions;

export default filterButtonsSlice.reducer;