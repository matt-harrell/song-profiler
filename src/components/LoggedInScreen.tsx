import { Grid, LinearProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { selectNumOfTracks, selectTimeRange } from "../slices/filterButtonsSlice";
import { fetchTopAlbum, fetchTopTracks, selectLoading, selectTracks } from "../slices/spotifySlice";
import Histogram from "./Histogram/Histogram";
import NumOfTrackSlider from "./NumOfTrackSlider/NumNumOfTrackSlider";
import SelectAudiFeature from "./SelectAudioFeature/SelectAudiFeature";
import TimeRangeButtons from "./TimeRangeButtons/TimeRangeButtons";

const LoggedInScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const timeRange = useSelector(selectTimeRange);
    const numOfTracks = useSelector(selectNumOfTracks);
    const loading = useSelector(selectLoading);
    const tracks = useSelector(selectTracks);
    
    // handles deplaying api called based on filtered button change
    useEffect(() => {
        // time out prevents too many API calls
        const delayChange = setTimeout(() => {
            dispatch(fetchTopTracks({timeRange,numOfTracks}))
        }, 500);
        return () => clearTimeout(delayChange);
    },[dispatch,timeRange,numOfTracks]);

    useEffect(() => {
        if(tracks.length > 0){
            dispatch(fetchTopAlbum(tracks[tracks.length-1].id))
        }
    },[dispatch,tracks])

    return(
        <Grid container spacing={2} paddingTop={1}>
            <Grid item xs={12} md={6}>
                <TimeRangeButtons/>
            </Grid>
            <Grid item xs={12} md={6}>
                <NumOfTrackSlider/>
            </Grid>
            <Grid item xs={12}>
                <SelectAudiFeature/>
            </Grid>
            <Grid item xs={12}>
                {loading ? <LinearProgress /> : <Histogram/>}
            </Grid>
        </Grid>
    );
}

export default LoggedInScreen;