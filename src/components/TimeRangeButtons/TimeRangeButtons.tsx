import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { fetchTopTracks } from "../../features/spotifySlice";
import TimeRangeButtonsComp from "./TimeRangeButtonsComp"

const TimeRangeButtons = () => {

    const dispatch = useDispatch<AppDispatch>();

    const handleClick = (timeRange:string) => {
        dispatch(fetchTopTracks({timeRange}))
    }


    return (
        <TimeRangeButtonsComp
            handleClick={handleClick}
        />
    );
}

export default TimeRangeButtons;