import { Box } from "@mui/material"
import LoginButton from "./LoginButton/LoginButton";

const LoggedOutScreen = () => {
    return(
        <Box sx={{marginRight:5}}>
            <LoginButton/>
        </Box>
    )
}

export default LoggedOutScreen;