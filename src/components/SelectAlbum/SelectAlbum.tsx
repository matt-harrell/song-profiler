import { useDispatch, useSelector } from "react-redux";
import { selectAlbumAnimationDuration, setShowAlbum } from "../../slices/menuSlice";
import { nextAlbum, prevAlbum } from "../../slices/spotifySlice";
import SelectAlbumComp from "./SelectAlbumComp";

const SelectAlbum = () => {
    
    const dispatch = useDispatch();
    const duration = useSelector(selectAlbumAnimationDuration);
    
    const handleNextClick = () => {
        dispatch(setShowAlbum(false));
        setTimeout(() => {
            dispatch(nextAlbum());
            dispatch(setShowAlbum(true))
        },duration)
    }

    const handlePrevClick = () => {
        dispatch(setShowAlbum(false));
        setTimeout(() => {
            dispatch(prevAlbum());
            dispatch(setShowAlbum(true))
        },duration)
    }

    return(
        <SelectAlbumComp
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
        />
    );
}

export default SelectAlbum;