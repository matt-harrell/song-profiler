import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuOpen, toggleMenu } from "../../slices/menuSlice";
import { selectLoading } from "../../slices/spotifySlice";
import { changeFontColors, changeThemeColors, selectThemeColors } from "../../slices/ThemeSlice";
import MenuDrawerComp from "./MenuDrawerComp";

const MenuDrawer = () => {

    const dispatch = useDispatch();
    const open = useSelector(selectMenuOpen);
    const isLoading = useSelector(selectLoading)
    const themeColors = useSelector(selectThemeColors);
    const [backgroundColor, setBackgroundColor] = useState(themeColors.backgroundColor.color);
    const [acousticnessColor, setAcousticnessColor] = useState(themeColors.colorOne.color);
    const [danceabilityColor, setDanceabilityColor] = useState(themeColors.colorTwo.color);
    const [energyColor, setEnergyColor] = useState(themeColors.colorThree.color);
    const [loudnessColor, setLoudnessColor] = useState(themeColors.colorFour.color);
    const [valenceColor, setValenceColor] = useState(themeColors.colorFive.color);
    const [mainFontColor,setMainFontColor] = useState(themeColors.backgroundColor.fontColor);
    const [secondaryFontColor,setSecondaryFontColor] = useState(themeColors.colorOne.fontColor);
    
    
    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'backgroundColor',color:backgroundColor}))
    },[backgroundColor, dispatch]);

    useEffect(() => {
        setBackgroundColor(themeColors.backgroundColor.color)
    },[themeColors.backgroundColor.color]);


    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'colorOne',color:acousticnessColor}))
    },[acousticnessColor, dispatch]);

    useEffect(() => {
        setAcousticnessColor(themeColors.colorOne.color)
    },[themeColors.colorOne.color]);


    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'colorTwo',color:danceabilityColor}))
    },[danceabilityColor, dispatch]);

    useEffect(() => {
        setDanceabilityColor(themeColors.colorTwo.color)
    },[themeColors.colorTwo.color]);


    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'colorThree',color:energyColor}))
    },[energyColor, dispatch]);

    useEffect(() => {
        setEnergyColor(themeColors.colorThree.color)
    },[themeColors.colorThree.color]);


    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'colorFour',color:loudnessColor}))
    },[loudnessColor, dispatch]);

    useEffect(() => {
        setLoudnessColor(themeColors.colorFour.color)
    },[themeColors.colorFour.color]);


    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'colorFive',color:valenceColor}))
    },[valenceColor, dispatch]);

    useEffect(() => {
        setValenceColor(themeColors.colorFive.color)
    },[themeColors.colorFive.color]);


    useEffect(() => {
        dispatch(changeFontColors({themeColor:'backgroundColor',color:mainFontColor}))
    },[mainFontColor, dispatch]);

    useEffect(() => {
        setMainFontColor(themeColors.backgroundColor.fontColor)
    },[themeColors.backgroundColor.fontColor]);


    useEffect(() => {
        dispatch(changeFontColors({themeColor:'colorOne',color:secondaryFontColor}))
    },[secondaryFontColor, dispatch]);

    useEffect(() => {
        setSecondaryFontColor(themeColors.colorOne.fontColor)
    },[themeColors.colorOne.fontColor]);

    const handleBackgroundColorChange = (e:string) => {
        setBackgroundColor(e)
    }

    const handleAcousticnessColorChange = (e:string) => {
        setAcousticnessColor(e)
    }

    const handleDanceabilityColorChange = (e:string) => {
        setDanceabilityColor(e)
    }

    const handleEnergyColorChange = (e:string) => {
        setEnergyColor(e)
    }

    const handleLoudnessColorChange = (e:string) => {
        setLoudnessColor(e)
    }

    const handleValenceColorChange = (e:string) => {
        setValenceColor(e)
    }
    const handleMainFontColorChange = (e:string) => {
        setMainFontColor(e)
    }

    const handleSecondaryFontColorChange = (e:string) => {
        setSecondaryFontColor(e)
    }
    
    const handleClose = (value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        dispatch(toggleMenu(value));
    }

    return(
        <MenuDrawerComp
            open={open}
            themeColors={themeColors}
            isLoading={isLoading}
            handleClose={handleClose}
            backgroundColor={backgroundColor}
            acousticnessColor={acousticnessColor}
            danceabilityColor={danceabilityColor}
            energyColor={energyColor}
            loudnessColor={loudnessColor}
            valenceColor={valenceColor}
            mainFontColor={mainFontColor}
            secondaryFontColor={secondaryFontColor}
            handleBackgroundColorChange={handleBackgroundColorChange}
            handleAcousticnessColorChange={handleAcousticnessColorChange}
            handleDanceabilityColorChange={handleDanceabilityColorChange}
            handleEnergyColorChange={handleEnergyColorChange}
            handleLoudnessColorChange={handleLoudnessColorChange}
            handleValenceColorChange={handleValenceColorChange}
            handleMainFontColorChange={handleMainFontColorChange}
            handleSecondaryFontColorChange={handleSecondaryFontColorChange}
        />
    );
}

export default MenuDrawer;