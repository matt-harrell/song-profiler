import { ButtonGroup,Button } from "@mui/material";
interface props{
    handleClick:(timeRange:string) => void;
}


const TimeRangeButtonsComp = ({handleClick}:props) => {
    return(
        <ButtonGroup variant="contained" aria-label="set the time range" disableElevation>
            <Button onClick={() => handleClick('short_term')}>
                Past 4 weeks
            </Button>
            <Button onClick={() => handleClick('medium_term')}>
                Past 6 months
            </Button>
            <Button onClick={() => handleClick('long_term')}>
                Past years
            </Button>
        </ButtonGroup>
    );
}

export default TimeRangeButtonsComp;