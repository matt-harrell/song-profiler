import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FeatureData {
    acousticness: number,
    danceability: number,
    energy:number,  
    loudness:number,  
    valence:number,
}
interface RadarChartState {
    showRadarChart:boolean,
    width:number,
    height:number,
    currentTrack:string,
    radarData:FeatureData[];
}

const initialState = {
    showRadarChart:false,
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
        setshowRadarChart(state,action:PayloadAction<boolean>){
            state.showRadarChart = action.payload;
        },
        setCurrentTrack(state,action:PayloadAction<string>){
            state.currentTrack = action.payload;
        },
        setRadarData(state,action){
            state.radarData = action.payload;
        }

    }
})

export const { setCurrentTrack,setRadarData,setshowRadarChart} = radarChartSlice.actions;

export const selectShowRadarChart = (state: { RadarChart: { showRadarChart: boolean; }; }) => state.RadarChart.showRadarChart;
export const selectWidth = (state: { RadarChart: { width: number; }; }) => state.RadarChart.width;
export const selectHeight = (state: { RadarChart: { height: number; }; }) => state.RadarChart.height;
// export const selectCurrentTrack = (state: { RadarChart: { currentTrack: string; }; }) => state.RadarChart.currentTrack;
export const selectRadarData = (state: { RadarChart: { radarData: FeatureData[]; }; }) => state.RadarChart.radarData;

export default radarChartSlice.reducer;