import { AppBar, Box, Divider, Drawer, Grid, IconButton, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GenericObject } from "../../types";
import SelectAlbum from "../SelectAlbum/SelectAlbum";
import { HexColorPicker,HexColorInput } from "react-colorful";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { dataColor } from "../../slices/radarChartSlice";
import React from "react";

interface MenuDrawerCompProps {
    open:boolean;
    themeColors:GenericObject;
    isLoading:boolean;
    backgroundColor:string;
    mainThemeColor:string;
    mainFontColor:string;
    secondaryFontColor:string;
    dataColors:dataColor[];

    handleClose:(value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    handleBackgroundColorChange:(e:string) => void;
    handleMainThemeColorChange:(e:string) => void;
    handleMainFontColorChange:(e:string) => void;
    handleSecondaryFontColorChange:(e:string) => void;
    handleSongColorChange: (color: string, index: number) => void

    handleBackgroundColorReset:() => void;
    handleMainThemeColorReset:() => void;
    handleMainFontReset:() => void;
    handleSecondaryFontReset:() => void;
    handleSongColorResest:(index: number) => void;
    handleResetAll:() => void;
    
}

const RadarMenuDrawerComp = ({
        open,
        themeColors,
        isLoading,
        backgroundColor,
        mainThemeColor,
        mainFontColor,
        secondaryFontColor,
        dataColors,

        handleClose,
        handleBackgroundColorChange,
        handleMainThemeColorChange,
        handleMainFontColorChange,
        handleSecondaryFontColorChange,
        handleSongColorChange,

        handleBackgroundColorReset,
        handleMainThemeColorReset,
        handleMainFontReset,
        handleSecondaryFontReset,
        handleSongColorResest,
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
                    <AppBar position="sticky">
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
                                            <HexColorPicker color={mainThemeColor} onChange={handleMainThemeColorChange} />
                                            <HexColorInput color={mainThemeColor} onChange={handleMainThemeColorChange}/>
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
                                        <Typography>Main Theme Color</Typography>
                                    </Grid>
                                    <Grid item xs={1} >
                                        <IconButton aria-label="reset acousticness color" onClick={handleMainThemeColorReset} sx={{padding:0}}>
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

                            {dataColors.map((dataColor: dataColor, index: number) =>
                                <React.Fragment key={index}>
                                    <Grid item xs={2}>
                                        <Tooltip
                                            title={
                                                <>
                                                    <HexColorPicker color={dataColor.currentColor} onChange={(e) => handleSongColorChange(e,index)} />
                                                    <HexColorInput color={dataColor.currentColor} onChange={(e) => handleSongColorChange(e,index)} />
                                                </>
                                            }
                                        >
                                            <Paper
                                                elevation={4}
                                                sx={{
                                                    width: 25,
                                                    height: 25,
                                                    backgroundColor: dataColor.currentColor,
                                                    '&:hover': {
                                                        cursor: 'pointer'
                                                    }
                                                }}
                                            />
                                        </Tooltip>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={11}>
                                                <Typography>{dataColor.songTitle}</Typography>
                                            </Grid>
                                            <Grid item xs={1} >
                                                <IconButton aria-label="reset background color" onClick={() => handleSongColorResest(index)} sx={{ padding: 0 }}>
                                                    <RotateLeftIcon sx={{ color: mainFontColor }} />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </React.Fragment>
                                

                            )}

                            

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

export default RadarMenuDrawerComp;