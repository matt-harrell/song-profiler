import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { GenericObject } from "../../types";
import CategoryAccordion from "../CategoryAccordion/CategoryAccordion";

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
                        
                        <CategoryAccordion/>

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