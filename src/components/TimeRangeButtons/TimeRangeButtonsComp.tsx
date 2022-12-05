import { ToggleButton ,ToggleButtonGroup } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTimeRange } from "../../features/filterButtonsSlice";
interface props{
    handleChange:(event:React.MouseEvent<HTMLElement>,timeRangeString:string) => void;
}


const TimeRangeButtonsComp = ({handleChange}:props) => {
    const timeRange = useSelector(selectTimeRange)

    return(
        <ToggleButtonGroup
            color="primary"
            value={timeRange}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            <ToggleButton value={'short_term'}>
                Past 4 weeks
            </ToggleButton>
            <ToggleButton value={'medium_term'}>
                Past 6 months
            </ToggleButton>
            <ToggleButton value={'long_term'}>
                Past years
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default TimeRangeButtonsComp;