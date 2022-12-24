import { prominent } from "color.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectAlbumURL } from "../features/spotifySlice"
import { setThemeColors } from "../features/ThemeSlice";

const ThemeFromImage = () => {
    const dispatch = useDispatch();
    const albumURL = useSelector(selectAlbumURL);
    

    const getColors = async (url:string) =>{
        const config = {
            amount:6,
            format:'hex',
            group:25,

        }
        const colors = await prominent(`${url}`, config);
        dispatch(setThemeColors(colors))
        
    } 

    useEffect(() => {
        if(albumURL !== ''){
            getColors(albumURL);
        }
    },[albumURL])
    
    return<></>
}

export default ThemeFromImage;