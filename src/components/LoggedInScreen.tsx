import { Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { selectNumOfTracks, selectTimeRange } from "../slices/filterButtonsSlice";
import { fetchTopTracks, selectShowGraph } from "../slices/spotifySlice";
import Histogram from "./Histogram/Histogram";
import NumOfTrackSlider from "./NumOfTrackSlider/NumNumOfTrackSlider";
import SelectAudiFeature from "./SelectAudioFeature/SelectAudiFeature";
import ThemeFromImage from "./ThemeFromImage";
import TimeRangeButtons from "./TimeRangeButtons/TimeRangeButtons";

const LoggedInScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const timeRange = useSelector(selectTimeRange);
    const numOfTracks = useSelector(selectNumOfTracks);
    const showGraph = useSelector(selectShowGraph);
    
    // handles deplaying api called based on filtered button change
    useEffect(() => {
        // time out prevents too many API calls
        const delayChange = setTimeout(() => {
            dispatch(fetchTopTracks({timeRange,numOfTracks}))
        }, 500);
        return () => clearTimeout(delayChange);
    },[dispatch,timeRange,numOfTracks]);


    return(
        <>
            <ThemeFromImage/>
            <Grid container spacing={2} paddingTop={4}>
                <Grid item xs={12} md={4}>
                    <TimeRangeButtons/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <SelectAudiFeature/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <NumOfTrackSlider/>
                </Grid>
                <Grid item xs={12}>
                    {showGraph ? <Histogram/> : <LinearProgress />}
                </Grid>
            </Grid>
        </>
    );
}

export default LoggedInScreen;