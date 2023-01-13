import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAlbumAnimationDuration, setNextDisabled, setPrevDisabled, setShowAlbum } from "../../slices/menuSlice";
import { nextAlbum, prevAlbum, selectCurrentAlbum, selectTracks } from "../../slices/spotifySlice";
import SelectAlbumComp from "./SelectAlbumComp";

const SelectAlbum = () => {
    
    const dispatch = useDispatch();
    const duration = useSelector(selectAlbumAnimationDuration);
    const tracks = useSelector(selectTracks);
    const curretAlbum = useSelector(selectCurrentAlbum);
    
    useEffect(() => {
        if (curretAlbum === 0) {
            dispatch(setPrevDisabled(true));
        } else{
            dispatch(setPrevDisabled(false));
        }

        if(curretAlbum === tracks.length-1){
            dispatch(setNextDisabled(true));
        }else{
            dispatch(setNextDisabled(false));
        }
    },[tracks, curretAlbum, dispatch])


    const handleNextClick = () => {
        if(curretAlbum+1 < tracks.length){
            dispatch(setShowAlbum(false));
            setTimeout(() => {
                dispatch(nextAlbum());
                dispatch(setShowAlbum(true));
            },duration)
        } else{
            dispatch(setNextDisabled(true));
        }
    }

    const handlePrevClick = () => {
        if (curretAlbum-1 > -1) {
            dispatch(setShowAlbum(false));
            setTimeout(() => {
                dispatch(prevAlbum());
                dispatch(setShowAlbum(true))
            },duration)
        }else {
            dispatch(setPrevDisabled(true));
        }
        
    }

    return(
        <SelectAlbumComp
            tracks={tracks}
            curretAlbum={curretAlbum}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
        />
    );
}

export default SelectAlbum;