import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { GenericObject } from "../../types";

interface InfoDrawerCompProps{
    open:boolean;
    themeColors:GenericObject;
    isLoading:boolean;
    handleClose:(value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const InfoDrawerComp = ({open,themeColors,isLoading,handleClose}:InfoDrawerCompProps) => {
    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={handleClose(false)}
        >
            <Box
                sx={{ width: 300 }}
                role="presentation"
            >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="sticky">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleClose(false)}
                            >
                                <ArrowForwardIosIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    color: isLoading ? 'inherit' : themeColors.colorOne.fontColor
                                }}
                            >
                                Information
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ marginTop: 4,paddingX:3 }}>
                        <Typography variant="h5" component='h2' sx={{ marginY: 2, textAlign: 'center' }}>Explanation of Each Category</Typography>
                        
                        <Typography sx={{marginTop: 2,fontWeight:'bold'}} variant="body1" component='h3'>
                            Acousticness
                        </Typography>
                        <Typography>
                            A confidence measure from 0  to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic.
                        </Typography>
                        
                        <Typography sx={{marginTop: 2,fontWeight:'bold'}} variant="body1" component='h3'>
                            Danceability
                        </Typography>
                        <Typography>
                            Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.
                        </Typography>
                        
                        <Typography sx={{marginTop: 2,fontWeight:'bold'}} variant="body1" component='h3'>
                            Energy
                        </Typography>
                        <Typography>
                            Energy is a measure from 0 to 100 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
                        </Typography>
                        
                        <Typography sx={{marginTop: 2,fontWeight:'bold'}} variant="body1" component='h3'>
                            Loudness
                        </Typography>
                        <Typography>
                            The overall loudness of a track. Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). The louder the track the higher the value up to 100.
                        </Typography>
                       
                        <Typography sx={{marginTop: 2,fontWeight:'bold'}} variant="body1" component='h3'>
                            Valence
                        </Typography>
                        <Typography>
                        A measure from 0 to 100 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
                        </Typography>

                        <Typography sx={{fontStyle:'italic', marginY:5}}>
                            Explanations based on <a href="https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features" target="_blank" rel="noopener noreferrer">spotify API docs</a>. Number values have been changed to represent values between 0 to 100.
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </Drawer>
    )
}

export default InfoDrawerComp;