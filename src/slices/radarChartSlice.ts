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

interface FeatureData {
    acousticness: number,
    danceability: number,
    energy:number,  
    loudness:number,  
    valence:number,
}

interface RadarChartData {
    nameOfTrack:string,
    featureData:FeatureData,
}

interface RadarChartState {
    width:number,
    height:number,
    currentTrack:string,
    // if current track is === to "All Songs" then that is when we need to find average
    data:RadarChartData[],
    radarData:FeatureData[];
}

const initialState = {
    width:1000,
    height:300,
    currentTrack:'All Songs',
    data:[],
    radarData:[],
} as RadarChartState;

const radarChartSlice = createSlice({
    name:'RadarChart',
    initialState,
    reducers:{
        setCurrentTrack(state,action:PayloadAction<string>){
            state.currentTrack = action.payload;
        },
        addData(state,action){
            if (state.currentTrack === 'All Songs') {

                const findAverage = (array:number[]) => Math.round(array.reduce((accumulator:number,currentValue:number) => {
                    const add = accumulator + currentValue
                    return add;
                }) / array.length)


                state.data.push({
                    nameOfTrack:'All Songs',
                    featureData:{
                        acousticness: findAverage(action.payload.acousticness),
                        danceability: findAverage(action.payload.danceability),
                        energy:findAverage(action.payload.energy),  
                        loudness:findAverage(action.payload.loudness),  
                        valence:findAverage(action.payload.valence),
                    }
                })

                state.radarData.push({
                        acousticness: findAverage(action.payload.acousticness),
                        danceability: findAverage(action.payload.danceability),
                        energy:findAverage(action.payload.energy),  
                        loudness:findAverage(action.payload.loudness),  
                        valence:findAverage(action.payload.valence),
                })

            } else {
                state.data.push({
                    nameOfTrack:action.payload.nameOfTrack,
                    featureData:{
                        acousticness: action.payload.acousticness,
                        danceability: action.payload.danceability,
                        energy:action.payload.energy,  
                        loudness:action.payload.loudness,  
                        valence:action.payload.valence,
                    }
                })

                state.radarData.push({
                        acousticness: action.payload.acousticness,
                        danceability: action.payload.danceability,
                        energy:action.payload.energy,  
                        loudness:action.payload.loudness,  
                        valence:action.payload.valence,
                })
            }
        }

    }
})

export const { setCurrentTrack, addData} = radarChartSlice.actions;

export const selectWidth = (state: { RadarChart: { width: number; }; }) => state.RadarChart.width;
export const selectHeight = (state: { RadarChart: { height: number; }; }) => state.RadarChart.height;
export const selectCurrentTrack = (state: { RadarChart: { currentTrack: string; }; }) => state.RadarChart.currentTrack;
export const selectData = (state: { RadarChart: { data: RadarChartData[]; }; }) => state.RadarChart.data;
export const selectRadarData = (state: { RadarChart: { radarData: FeatureData[]; }; }) => state.RadarChart.radarData;

export default radarChartSlice.reducer;