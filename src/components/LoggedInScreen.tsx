import { Grid } from "@mui/material";
import TimeRangeButtons from "./TimeRangeButtons/TimeRangeButtons";

const LoggedInScreen = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <TimeRangeButtons/>
            </Grid>
        </Grid>
    );
}

export default LoggedInScreen;