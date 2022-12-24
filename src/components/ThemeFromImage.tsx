import { prominent } from "color.js";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { selectAlbumURL } from "../features/spotifySlice"

const ThemeFromImage = () => {
    const albumURL = useSelector(selectAlbumURL);

    const getColors = async (url:string) =>{
        const config = {
            amount:5,
            format:'hex',
            group:30,

        }
        const color = await prominent(`${url}`, config)
    } 

    useEffect(() => {
        if(albumURL !== ''){
            getColors(albumURL);
        }
    },[albumURL])
    
    return<></>
}

export default ThemeFromImage;