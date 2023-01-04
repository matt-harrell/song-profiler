import { useDispatch } from "react-redux";
import { nextAlbum, prevAlbum } from "../../slices/spotifySlice";
import SelectAlbumComp from "./SelectAlbumComp";

const SelectAlbum = () => {

    const dispatch = useDispatch();

    const handleNextClick = () => {
        dispatch(nextAlbum());
    }

    const handlePrevClick = () => {
        dispatch(prevAlbum());
    }

    return(
        <SelectAlbumComp
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
        />
    );
}

export default SelectAlbum;