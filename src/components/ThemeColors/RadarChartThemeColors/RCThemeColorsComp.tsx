import { Grid, IconButton, Paper, Tooltip,Typography, } from "@mui/material";
import { HexColorInput, HexColorPicker } from "react-colorful";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import React from "react";
import { dataColor } from "../../../slices/radarChartSlice";
import { GenericObject } from "../../../types";

interface RCThemeColorsCompProps {
    themeColors:GenericObject;
    backgroundColor:string;
    mainThemeColor:string;
    mainFontColor:string;
    secondaryFontColor:string;
    dataColors:dataColor[];

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


const RCThemeColorsComp = ({
        themeColors,
        backgroundColor,
        mainThemeColor,
        mainFontColor,
        secondaryFontColor,
        dataColors,

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

}:RCThemeColorsCompProps) => {
    return (
        <>
            <Grid container spacing={3} sx={{ paddingX: 4 }}>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={backgroundColor} onChange={handleBackgroundColorChange} />
                                <HexColorInput color={backgroundColor} onChange={handleBackgroundColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.backgroundColor.color,
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
                            <Typography>Background</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset background color" onClick={handleBackgroundColorReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={mainThemeColor} onChange={handleMainThemeColorChange} />
                                <HexColorInput color={mainThemeColor} onChange={handleMainThemeColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.colorOne.color,
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
                            <Typography>Main Theme Color</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset acousticness color" onClick={handleMainThemeColorReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={mainFontColor} onChange={handleMainFontColorChange} />
                                <HexColorInput color={mainFontColor} onChange={handleMainFontColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.backgroundColor.fontColor,
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
                            <Typography>Main Font Color</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset main font color" onClick={handleMainFontReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={secondaryFontColor} onChange={handleSecondaryFontColorChange} />
                                <HexColorInput color={secondaryFontColor} onChange={handleSecondaryFontColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.colorOne.fontColor,
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
                            <Typography>Secondary Font Color</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset secondary font color" onClick={handleSecondaryFontReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
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
                                        <HexColorPicker color={dataColor.currentColor} onChange={(e) => handleSongColorChange(e, index)} />
                                        <HexColorInput color={dataColor.currentColor} onChange={(e) => handleSongColorChange(e, index)} />
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

            <Grid container spacing={1} justifyContent='center' sx={{ marginTop: 2 }}>
                <Grid item xs={'auto'}>
                    <Typography>Reset All</Typography>
                </Grid>
                <Grid item xs={'auto'} >
                    <IconButton aria-label="reset secondary font color" onClick={handleResetAll} sx={{ padding: 0 }}>
                        <RotateLeftIcon sx={{ color: mainFontColor }} />
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
}

export default RCThemeColorsComp;