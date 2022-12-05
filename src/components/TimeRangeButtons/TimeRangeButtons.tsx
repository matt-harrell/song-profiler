import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setTimeRange } from "../../features/filterButtonsSlice";
import TimeRangeButtonsComp from "./TimeRangeButtonsComp"

const TimeRangeButtons = () => {
    const dispatch = useDispatch<AppDispatch>();


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