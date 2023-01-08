import { AppBar, Box, Drawer, Grid, IconButton, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GenericObject } from "../../types";
import SelectAlbum from "../SelectAlbum/SelectAlbum";
import { HexColorPicker,HexColorInput } from "react-colorful";

interface MenuDrawerCompProps {
    open:boolean;
    themeColors:GenericObject;
    isLoading:boolean;
    backgroundColor:string;
    acousticnessColor:string;
    danceabilityColor:string;
    energyColor:string;
    loudnessColor:string;
    valenceColor:string;
    mainFontColor:string;
    secondaryFontColor:string;
    handleClose:(value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    handleBackgroundColorChange:(e:string) => void;
    handleAcousticnessColorChange:(e:string) => void;
    handleDanceabilityColorChange:(e:string) => void;
    handleEnergyColorChange:(e:string) => void;
    handleLoudnessColorChange:(e:string) => void;
    handleValenceColorChange:(e:string) => void;
    handleMainFontColorChange:(e:string) => void;
    handleSecondaryFontColorChange:(e:string) => void;
    
}

const MenuDrawerComp = ({
        open,
        themeColors,
        isLoading,
        backgroundColor,
        acousticnessColor,
        danceabilityColor,
        energyColor,
        loudnessColor,
        valenceColor,
        mainFontColor,
        secondaryFontColor,
        handleClose,
        handleBackgroundColorChange,
        handleAcousticnessColorChange,
        handleDanceabilityColorChange,
        handleEnergyColorChange,
        handleLoudnessColorChange,
        handleValenceColorChange,
        handleMainFontColorChange,
        handleSecondaryFontColorChange,
    }:MenuDrawerCompProps) => {

    return(
        <Drawer
            anchor={'left'}
            open={open}
            onClose={handleClose(false)}
        >
            <Box
                sx={{ width: 300 }}
                role="presentation"
            >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    color:isLoading ? 'inherit' :  themeColors.colorOne.fontColor
                                }}
                            >
                                Edit Theme
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleClose(false)}
                            >
                                <ArrowBackIosNewIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{marginTop:4}}>
                        <SelectAlbum/>
                        <Grid container spacing={2} sx={{paddingX:4,paddingTop:4}}>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={backgroundColor} onChange={handleBackgroundColorChange} />
                                            <HexColorInput color={backgroundColor} onChange={handleBackgroundColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.backgroundColor.color,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Background</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={acousticnessColor} onChange={handleAcousticnessColorChange} />
                                            <HexColorInput color={acousticnessColor} onChange={handleAcousticnessColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.colorOne.color,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Acousticness</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={danceabilityColor} onChange={handleDanceabilityColorChange} />
                                            <HexColorInput color={danceabilityColor} onChange={handleDanceabilityColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.colorTwo.color,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Danceability</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={energyColor} onChange={handleEnergyColorChange} />
                                            <HexColorInput color={energyColor} onChange={handleEnergyColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.colorThree.color,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Energy</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={loudnessColor} onChange={handleLoudnessColorChange} />
                                            <HexColorInput color={loudnessColor} onChange={handleLoudnessColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.colorFour.color,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Loudness</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={valenceColor} onChange={handleValenceColorChange} />
                                            <HexColorInput color={valenceColor} onChange={handleValenceColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.colorFive.color,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Valence</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={mainFontColor} onChange={handleMainFontColorChange} />
                                            <HexColorInput color={mainFontColor} onChange={handleMainFontColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.backgroundColor.fontColor,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Main Font Color</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Tooltip
                                    title={
                                        <>
                                            <HexColorPicker color={secondaryFontColor} onChange={handleSecondaryFontColorChange} />
                                            <HexColorInput color={secondaryFontColor} onChange={handleSecondaryFontColorChange}/>
                                        </>
                                    }
                                    >
                                    <Paper 
                                        elevation={4} 
                                        sx={{
                                            width:25, 
                                            height:25,
                                            backgroundColor:themeColors.colorOne.fontColor,
                                            '&:hover':{
                                                cursor:'pointer'
                                            }
                                        }} 
                                    />
                                </Tooltip>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Secondary Font Color</Typography>
                            </Grid>

                        </Grid>
                   
                    </Box>
                    
                </Box>
            </Box>

        </Drawer>
    ); 
}

export default MenuDrawerComp;