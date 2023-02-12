import { Box, Typography } from "@mui/material"
import LoginButton from "./LoginButton/LoginButton";
import InfoIcon from '@mui/icons-material/Info';

const LoggedOutScreen = () => {
    return(
        <Box sx={{marginX:'auto',maxWidth:1080,textAlign:'left',marginY:3}}>
            <Typography variant="h2" component='h2' sx={{textAlign:'center'}}>
                Welcome to myFavs!
            </Typography>
            <Typography variant="h4" component='p'>
                This app will show your top songs and the Spotify audio profile for each song. 
                This app uses 5 categories to show the audio profile for each song. The 5 categories are:
            </Typography>
            <Typography sx={{ marginTop: 2, fontWeight: 'bold' }} variant="body1" component='h3'>
                Acousticness
            </Typography>
            <Typography>
                A confidence measure from 0  to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic.
            </Typography>

            <Typography sx={{ marginTop: 2, fontWeight: 'bold' }} variant="body1" component='h3'>
                Danceability
            </Typography>
            <Typography>
                Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.
            </Typography>

            <Typography sx={{ marginTop: 2, fontWeight: 'bold' }} variant="body1" component='h3'>
                Energy
            </Typography>
            <Typography>
                Energy is a measure from 0 to 100 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
            </Typography>

            <Typography sx={{ marginTop: 2, fontWeight: 'bold' }} variant="body1" component='h3'>
                Loudness
            </Typography>
            <Typography>
                The overall loudness of a track. Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). The louder the track the higher the value up to 100.
            </Typography>

            <Typography sx={{ marginTop: 2, fontWeight: 'bold' }} variant="body1" component='h3'>
                Valence
            </Typography>
            <Typography>
                A measure from 0 to 100 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
            </Typography>

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
        </Box>
    )
}

export default LoggedOutScreen;