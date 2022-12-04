import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { selectTimeRange, setTimeRange,selectNumOfTracks } from "../../features/filterButtonsSlice";
import { fetchTopTracks } from "../../features/spotifySlice";
import TimeRangeButtonsComp from "./TimeRangeButtonsComp"

const TimeRangeButtons = () => {
    const dispatch = useDispatch<AppDispatch>();
    const timeRange = useSelector(selectTimeRange);
    const numOfTracks = useSelector(selectNumOfTracks)

    useEffect(() => {
        dispatch(fetchTopTracks({timeRange,numOfTracks}))
    },[dispatch,timeRange,numOfTracks])


    const handleChange = (event:React.MouseEvent<HTMLElement>,timeRangeString:string) => {
        dispatch(setTimeRange(timeRangeString))
    }


    return (
        <TimeRangeButtonsComp
            handleChange={handleChange}
        />
    );
}

export default TimeRangeButtons;