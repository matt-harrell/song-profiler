import { Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { selectNumOfTracks, selectTimeRange } from "../slices/filterButtonsSlice";
import { selectShowRadarChart } from "../slices/radarChartSlice";
import { fetchTopTracks, selectAllLongRangeTracks, selectAllShortRangeTracks, selectShowGraph, setCurrentTracks } from "../slices/spotifySlice";
import Histogram from "./Histogram/Histogram";
import NumOfTrackSlider from "./NumOfTrackSlider/NumNumOfTrackSlider";
import RadarChartComp from "./RadarChart/RadarChart";
import SelectSongs from "./RadarChart/SelectSongs/SelectSongs";
import SelectAudiFeature from "./SelectAudioFeature/SelectAudiFeature";
import ThemeFromImage from "./ThemeFromImage";
import TimeRangeButtons from "./TimeRangeButtons/TimeRangeButtons";

const LoggedInScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const timeRange = useSelector(selectTimeRange);
    const numOfTracks = useSelector(selectNumOfTracks);
    const showGraph = useSelector(selectShowGraph);
    const allShortRangeTracks = useSelector(selectAllShortRangeTracks);
    const allLongRangeTracks = useSelector(selectAllLongRangeTracks);
    const showRadarChart = useSelector(selectShowRadarChart);

    
    
    // useEffect(() => {
    //     dispatch(fetchTopTracks({timeRange}));     
    // },[dispatch,timeRange]);

    useEffect(() => {
        const delayChange = setTimeout(() => {
            if (timeRange ==='short_term' && allShortRangeTracks.length > 0) {
                dispatch(setCurrentTracks({timeRange:'allShortRangeTracks',numOfTracks:numOfTracks}));
            } else if(timeRange ==='medium_term'){
                dispatch(setCurrentTracks({timeRange:'allMedRangeTracks',numOfTracks:numOfTracks}));
            } else if (timeRange ==='long_term' && allLongRangeTracks.length > 0){
                dispatch(setCurrentTracks({timeRange:'allLongRangeTracks',numOfTracks:numOfTracks}));
            } else{
                dispatch(fetchTopTracks({timeRange:timeRange,numOfTracks:numOfTracks})); 
            }
            
        }, 500);
        return () => clearTimeout(delayChange);
    },[allLongRangeTracks.length, allShortRangeTracks.length, dispatch, numOfTracks, timeRange]);


    return(
        <>
            <ThemeFromImage/>
            <Grid container spacing={2} paddingTop={4}>
                <Grid item xs={12} md={4}>
                    <TimeRangeButtons/>
                </Grid>
                <Grid item xs={12} md={4}>
                    {showRadarChart ? null : <SelectAudiFeature/>}
                </Grid>
                <Grid item xs={12} md={4}>
                    {showRadarChart ? <SelectSongs/> : <NumOfTrackSlider/>}
                </Grid>
                <Grid item xs={12}>
                    {showGraph ? <RadarChartComp/> : <LinearProgress />}
                </Grid>
            </Grid>
        </>
    );
}

export default LoggedInScreen;