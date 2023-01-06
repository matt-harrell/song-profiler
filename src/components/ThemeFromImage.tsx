import { prominent } from "color.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentAlbum, selectLoading, selectTracks, setShowGraph } from "../slices/spotifySlice"
import { setThemeColors } from "../slices/ThemeSlice";

const ThemeFromImage = () => {
    const dispatch = useDispatch();
    const tracks = useSelector(selectTracks);
    const currentAlbum = useSelector(selectCurrentAlbum);
    const isLoading =  useSelector(selectLoading);
    

    
    
    

    useEffect(() => {
        const getColors = async (url:string) =>{
        const config = {
            amount:6,
            format:'hex',
            group:25,

        }
        const colors = await prominent(`${url}`, config);
        dispatch(setThemeColors(colors))
        
    }
        if(!isLoading){
            getColors(tracks[currentAlbum].albumImage);
            dispatch(setShowGraph(true))
        }else{
            dispatch(setShowGraph(false))
        }
    },[tracks, currentAlbum, dispatch,isLoading])
    
    return<></>
}

export default ThemeFromImage;