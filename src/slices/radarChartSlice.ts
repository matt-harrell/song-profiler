/* need slice to following state
- width
- height
- handle which data is displaying
- handle how to change which data is displaying
    - find the average off all songs if all songs is showing
    - if it is a single song, then use those values
- handle resizing the width and height when the screen size changes
- handle changing the data
*/

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RadarChartData {
    acousticness: number | number[],
    danceability: number | number[],
    energy:number | number[],  
    loudness:number | number[],  
    valence:number | number[],
}

interface RadarChartState {
    width:number,
    height:number,
    currentTrack:string,
    // if current track is === to "All Songs" then that is when we need to find average
    data:RadarChartData,
}

const initialState = {
    width:1000,
    height:300,
    currentTrack:'All Songs',
    data:{
        acousticness: 0,
        danceability: 0,
        energy:0,  
        loudness:0,  
        valence:0,
    }
} as RadarChartState;

const radarChartSlice = createSlice({
    name:'RadarChart',
    initialState,
    reducers:{
        setCurrentTrack(state,action:PayloadAction<string>){
            state.currentTrack = action.payload;
        },
        setData(state,action){
            if (state.currentTrack === 'All Songs') {

                const findAverage = (array:number[]) => Math.round(array.reduce((accumulator:number,currentValue:number) => {
                    const add = accumulator + currentValue
                    return add;
                }) / array.length)

                for (const feature in state.data) {
                    state.data[feature as keyof typeof state.data] = findAverage(action.payload[feature as keyof typeof action.payload])
                }
            } else {
                for (const feature in state.data) {
                    state.data[feature as keyof typeof state.data] = action.payload[feature as keyof typeof action.payload]
                }
            }
        }

    }
})

export const { setCurrentTrack, setData} = radarChartSlice.actions;

export const selectWidth = (state: { RadarChart: { width: number; }; }) => state.RadarChart.width;
export const selectHeight = (state: { RadarChart: { height: number; }; }) => state.RadarChart.height;
export const selectCurrentTrack = (state: { RadarChart: { currentTrack: string; }; }) => state.RadarChart.currentTrack;
export const selectData = (state: { RadarChart: { data: RadarChartData; }; }) => state.RadarChart.data;

export default radarChartSlice.reducer;