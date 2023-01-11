import { useDispatch, useSelector } from "react-redux";
import { selectNumOfTracks, setNumOfTracks } from "../../slices/filterButtonsSlice";
import { setCurrentAlbum } from "../../slices/spotifySlice";
import NumOfTrackSliderComp from "./NumOfTrackSliderComp";

const NumOfTrackSlider = () => {

    const dispatch = useDispatch();
    const numOfTracks = useSelector(selectNumOfTracks);

    const handleChange = (event:Event,numOfTracksNum:number | number[]) => {
        setTimeout(() => {
            dispatch(setCurrentAlbum(0))    
        },500)
        dispatch(setNumOfTracks(numOfTracksNum))
    }

    return (
        <NumOfTrackSliderComp
            handleChange={handleChange}
            numOfTracks={numOfTracks}
        />
    );
}

export default NumOfTrackSlider;