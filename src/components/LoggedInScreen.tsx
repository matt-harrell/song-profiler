import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch } from "../app/store";
import { selectNumOfTracks, selectTimeRange } from "../features/filterButtonsSlice";
import { fetchTopTracks } from "../features/spotifySlice";
import NumOfTrackSlider from "./NumOfTrackSlider/NumNumOfTrackSlider";
import TimeRangeButtons from "./TimeRangeButtons/TimeRangeButtons";

const LoggedInScreen = () => {

    const dispatch = useDispatch<AppDispatch>();
    const timeRange = useSelector(selectTimeRange);
    const numOfTracks = useSelector(selectNumOfTracks);
    
    // handles deplaying api called based on filtered button change
    useEffect(() => {
        // time out prevents too many API calls
        const delayChange = setTimeout(() => {
            dispatch(fetchTopTracks({timeRange,numOfTracks}))
        }, 500);
        return () => clearTimeout(delayChange);
    },[dispatch,timeRange,numOfTracks])

    return(
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TimeRangeButtons/>
                <NumOfTrackSlider/>
            </Grid>
        </Grid>
    );
}

export default LoggedInScreen;