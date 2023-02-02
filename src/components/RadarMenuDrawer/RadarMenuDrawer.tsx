import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMenuOpen, toggleMenu } from "../../slices/menuSlice";
import { selectDataColors,changeDataColor } from "../../slices/radarChartSlice";
import { selectLoading } from "../../slices/spotifySlice";
import { changeFontColors, changeThemeColors, selectDefaultAlbumColors, selectThemeColors } from "../../slices/ThemeSlice";
import BarChartMenuDrawerComp from "./RadarMenuDrawerComp";

const RadarMenuDrawer = () => {

    const dispatch = useDispatch();
    const open = useSelector(selectMenuOpen);
    const isLoading = useSelector(selectLoading)
    const themeColors = useSelector(selectThemeColors);
    const albumDefaultColors = useSelector(selectDefaultAlbumColors);
    const [backgroundColor, setBackgroundColor] = useState(themeColors.backgroundColor.color);
    const [mainThemeColor, setMainThemeColor] = useState(themeColors.colorOne.color);
    const [mainFontColor,setMainFontColor] = useState(themeColors.backgroundColor.fontColor);
    const [secondaryFontColor,setSecondaryFontColor] = useState(themeColors.colorOne.fontColor);
    const dataColors = useSelector(selectDataColors);
    
    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'backgroundColor',color:backgroundColor}))
    },[backgroundColor, dispatch]);

    useEffect(() => {
        setBackgroundColor(themeColors.backgroundColor.color)
    },[themeColors.backgroundColor.color]);


    useEffect(() => {
        dispatch(changeThemeColors({themeColor:'colorOne',color:mainThemeColor}))
    },[mainThemeColor, dispatch]);

    useEffect(() => {
        setMainThemeColor(themeColors.colorOne.color)
    },[themeColors.colorOne.color]);

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
    const handleBackgroundColorReset = () => {
        setBackgroundColor(albumDefaultColors.backgroundColor.color);
    }

    const handleMainThemeColorChange = (e:string) => {
        setMainThemeColor(e)
    }

    const handleMainThemeColorReset = () => {
        setMainThemeColor(albumDefaultColors.colorOne.color);
    }

    const handleMainFontColorChange = (e:string) => {
        setMainFontColor(e)
    }

    const handleMainFontReset = () => {
        setMainFontColor(albumDefaultColors.backgroundColor.fontColor);
    }

    const handleSecondaryFontColorChange = (e:string) => {
        setSecondaryFontColor(e)
    }

    const handleSecondaryFontReset = () => {
        setSecondaryFontColor(albumDefaultColors.colorOne.fontColor);
    }

    const handleSongColorChange = (color:string,index:number) => {
        dispatch(changeDataColor({index:index,color:color}))
    }
    const handleSongColorResest = (index:number) => {
        dispatch(changeDataColor({index:index,color:dataColors[index].defaultColor}))
    }

    const handleResetAll = () => {
        setBackgroundColor(albumDefaultColors.backgroundColor.color);
        setMainThemeColor(albumDefaultColors.colorOne.color);
        setMainFontColor(albumDefaultColors.backgroundColor.fontColor);
        setSecondaryFontColor(albumDefaultColors.colorOne.fontColor);
        for (let index = 0; index < dataColors.length; index++) {
            handleSongColorResest(index)
        }
    }
    
    const handleClose = (value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        dispatch(toggleMenu(value));
    }

    return(
        <BarChartMenuDrawerComp
            open={open}
            themeColors={themeColors}
            isLoading={isLoading}
            handleClose={handleClose}
            backgroundColor={backgroundColor}
            mainThemeColor={mainThemeColor}
            mainFontColor={mainFontColor}
            secondaryFontColor={secondaryFontColor}
            dataColors={dataColors}

            handleBackgroundColorChange={handleBackgroundColorChange}
            handleMainThemeColorChange={handleMainThemeColorChange}
            handleMainFontColorChange={handleMainFontColorChange}
            handleSecondaryFontColorChange={handleSecondaryFontColorChange}
            handleSongColorChange={handleSongColorChange}

            handleBackgroundColorReset={handleBackgroundColorReset}
            handleMainThemeColorReset={handleMainThemeColorReset}
            handleMainFontReset={handleMainFontReset}
            handleSecondaryFontReset={handleSecondaryFontReset}
            handleSongColorResest={handleSongColorResest}
            handleResetAll={handleResetAll}
        />
    );
}

export default RadarMenuDrawer;