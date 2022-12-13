import { SelectChangeEvent } from "@mui/material";
import { useDispatch } from "react-redux";
import { setAudioFeature } from "../../features/filterButtonsSlice";
import SelectAudiFeatureComp from "./SelectAudiFeatureComp";

const SelectAudiFeature = () => {

    const dispatch = useDispatch();

    const handleChange = (e:SelectChangeEvent) => {
        dispatch(setAudioFeature(e.target.value))
    }

    return(
        <SelectAudiFeatureComp
            handleChange={handleChange}
        />
    );
}

export default SelectAudiFeature;