import { Box, Container, Typography } from "@mui/material"
import LoginButton from "./LoginButton/LoginButton";
import InfoIcon from '@mui/icons-material/Info';
import CategoryAccordion from "./CategoryAccordion/CategoryAccordion";

const LoggedOutScreen = () => {
    return(
        <Container maxWidth="md" sx={{paddingY:5}}>
            <Typography variant="h2" component='h2' sx={{textAlign:'center'}}>
                Welcome to Song Profiler!
            </Typography>
            <Typography component='p' sx={{marginTop:3,marginBottom:2}}>
                This app will show your top songs and the Spotify audio profile for each song. 
                This app uses 5 categories to show the audio profile for each song. The 5 categories are:
            </Typography>

            <CategoryAccordion/>

            <Typography sx={{ fontStyle: 'italic', marginY: 5 }}>
                Category explanations are based on <a href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features" target="_blank" rel="noopener noreferrer">Spotify API docs</a>. Number values have been changed to represent 
                values between 0 to 100. Converting the values to a scale of 0 to 100 makes it easier to compare data 
                across the categories and songs. 
            </Typography>
            <Typography>
                The explanation for each category is also available in the right corner by clicking the <InfoIcon/>.
            </Typography>
            <Typography sx={{marginY:3}}>
                First you will need to log into your Spotify account to get started.
            </Typography>
            <Box sx={{textAlign:'center'}}>
                <LoginButton />
            </Box>
        </Container>
    )
}

export default LoggedOutScreen;