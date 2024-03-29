import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface dataColor {
    songTitle:string,
    currentColor:string,
    defaultColor:string,
}
export interface FeatureData {
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
    radarData:FeatureData[],
    dataColors:dataColor[],
}

const initialState = {
    showRadarChart:true,
    width:410,
    height:300,
    data:[],
    radarData:[],
    dataColors:[],
} as RadarChartState;

const radarChartSlice = createSlice({
    name:'RadarChart',
    initialState,
    reducers:{
        setShowRadarChart(state,action:PayloadAction<boolean>){
            state.showRadarChart = action.payload;
        },
        setRadarData(state,action){
            state.radarData = action.payload;
        },
        setDataColors(state,action:PayloadAction<dataColor[]>){
            state.dataColors = action.payload;
        },
        changeDataColor(state,action:PayloadAction<{index:number,color:string}>){
            state.dataColors[action.payload.index].currentColor = action.payload.color;
        },
        changeBothDataColors(state,action:PayloadAction<{index:number,color:string}>){
            state.dataColors[action.payload.index].currentColor = action.payload.color;
            state.dataColors[action.payload.index].defaultColor = action.payload.color;
        },
        setWidth(state,action:PayloadAction<number>){
            state.width = action.payload;
        }

    }
})

export const { setRadarData,setShowRadarChart,setDataColors,changeDataColor, changeBothDataColors,setWidth} = radarChartSlice.actions;

export const selectShowRadarChart = (state: { RadarChart: { showRadarChart: boolean; }; }) => state.RadarChart.showRadarChart;
export const selectWidth = (state: { RadarChart: { width: number; }; }) => state.RadarChart.width;
export const selectHeight = (state: { RadarChart: { height: number; }; }) => state.RadarChart.height;
export const selectRadarData = (state: { RadarChart: { radarData: FeatureData[]; }; }) => state.RadarChart.radarData;
export const selectDataColors = (state: { RadarChart: { dataColors: dataColor[]; }; }) => state.RadarChart.dataColors;

export default radarChartSlice.reducer;