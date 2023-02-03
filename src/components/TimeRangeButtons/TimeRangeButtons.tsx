import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setTimeRange } from "../../slices/filterButtonsSlice";
import { setCurrentAlbum } from "../../slices/spotifySlice";
import TimeRangeButtonsComp from "./TimeRangeButtonsComp"

const TimeRangeButtons = () => {
    const dispatch = useDispatch<AppDispatch>();


    const handleChange = (event:React.MouseEvent<HTMLElement>,timeRangeString:string) => {
        if (timeRangeString !== null){
            dispatch(setCurrentAlbum(0))
            dispatch(setTimeRange(timeRangeString))
        }
        
    }


    return (
        <TimeRangeButtonsComp
            handleChange={handleChange}
        />
    );
}

export default TimeRangeButtons;