import { AppBar, Box, Divider, Drawer, Grid, IconButton, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GenericObject } from "../../types";
import SelectAlbum from "../SelectAlbum/SelectAlbum";
import { HexColorPicker,HexColorInput } from "react-colorful";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

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
    handleBackgroundColorReset:() => void;
    handleAcousticnessColorReset:() => void;
    handleDanceabilityColorReset:() => void;
    handleEnergyColorReset:() => void;
    handleLoudnessColorReset:() => void;
    handleValenceColorReset:() => void;
    handleMainFontReset:() => void;
    handleSecondaryFontReset:() => void;
    handleResetAll:() => void;
    
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
        handleBackgroundColorReset,
        handleAcousticnessColorReset,
        handleDanceabilityColorReset,
        handleEnergyColorReset,
        handleLoudnessColorReset,
        handleValenceColorReset,
        handleMainFontReset,
        handleSecondaryFontReset,
        handleResetAll,
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
                        <Divider sx={{marginY:4}}/>
                        <Typography variant="h4" component='h2' sx={{marginY:2,textAlign:'center'}}>Theme Colors</Typography>
                        <Grid container spacing={3} sx={{paddingX:4}}>

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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Background</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset background color" onClick={handleBackgroundColorReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Acousticness</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset acousticness color" onClick={handleAcousticnessColorReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Danceability</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset sanceability color" onClick={handleDanceabilityColorReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Energy</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset background color" onClick={handleEnergyColorReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Loudness</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset background color" onClick={handleLoudnessColorReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Valence</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset background color" onClick={handleValenceColorReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Main Font Color</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset main font color" onClick={handleMainFontReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
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
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography>Secondary Font Color</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset secondary font color" onClick={handleSecondaryFontReset} sx={{padding:0}}>
                                            <RotateLeftIcon sx={{color:mainFontColor}}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>

                            

                        </Grid>

                        <Grid container spacing={1} justifyContent='center' sx={{marginTop:2}}>
                                <Grid item xs={'auto'}>
                                    <Typography>Reset All</Typography>
                                </Grid>
                                <Grid item xs={'auto'} >
                                    <IconButton aria-label="reset secondary font color" onClick={handleResetAll} sx={{ padding: 0 }}>
                                        <RotateLeftIcon sx={{ color: mainFontColor }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                   
                    </Box>
                    
                </Box>
            </Box>

        </Drawer>
    ); 
}

export default MenuDrawerComp;