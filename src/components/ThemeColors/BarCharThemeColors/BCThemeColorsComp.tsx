import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { HexColorInput, HexColorPicker } from "react-colorful";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { GenericObject } from "../../../types";

interface BCThemeColorsCompProps {
    themeColors:GenericObject;
    backgroundColor:string;
    acousticnessColor:string;
    danceabilityColor:string;
    energyColor:string;
    loudnessColor:string;
    valenceColor:string;
    mainFontColor:string;
    secondaryFontColor:string;
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

const BCThemeColorsComp = ({
        themeColors,
        backgroundColor,
        acousticnessColor,
        danceabilityColor,
        energyColor,
        loudnessColor,
        valenceColor,
        mainFontColor,
        secondaryFontColor,
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
}:BCThemeColorsCompProps) => {
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
                                <HexColorPicker color={acousticnessColor} onChange={handleAcousticnessColorChange} />
                                <HexColorInput color={acousticnessColor} onChange={handleAcousticnessColorChange} />
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
                            <Typography>Acousticness</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset acousticness color" onClick={handleAcousticnessColorReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={danceabilityColor} onChange={handleDanceabilityColorChange} />
                                <HexColorInput color={danceabilityColor} onChange={handleDanceabilityColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.colorTwo.color,
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
                            <Typography>Danceability</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset sanceability color" onClick={handleDanceabilityColorReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={energyColor} onChange={handleEnergyColorChange} />
                                <HexColorInput color={energyColor} onChange={handleEnergyColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.colorThree.color,
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
                            <Typography>Energy</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset background color" onClick={handleEnergyColorReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={loudnessColor} onChange={handleLoudnessColorChange} />
                                <HexColorInput color={loudnessColor} onChange={handleLoudnessColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.colorFour.color,
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
                            <Typography>Loudness</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset background color" onClick={handleLoudnessColorReset} sx={{ padding: 0 }}>
                                <RotateLeftIcon sx={{ color: mainFontColor }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Tooltip
                        title={
                            <>
                                <HexColorPicker color={valenceColor} onChange={handleValenceColorChange} />
                                <HexColorInput color={valenceColor} onChange={handleValenceColorChange} />
                            </>
                        }
                    >
                        <Paper
                            elevation={4}
                            sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: themeColors.colorFive.color,
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
                            <Typography>Valence</Typography>
                        </Grid>
                        <Grid item xs={1} >
                            <IconButton aria-label="reset background color" onClick={handleValenceColorReset} sx={{ padding: 0 }}>
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

export default BCThemeColorsComp;