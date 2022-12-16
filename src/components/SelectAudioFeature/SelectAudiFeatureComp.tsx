import { FormControl,InputLabel,Select,MenuItem, SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAudioFeature } from "../../features/filterButtonsSlice";

interface props {
    handleChange:(e:SelectChangeEvent) => void;
}

const SelectAudiFeatureComp = ({handleChange}:props) => {

    const audioFeature = useSelector(selectAudioFeature);

    return (
        <FormControl style={{maxWidth:300}}>
            <InputLabel id="select-audio-feature-label">Audio Feature</InputLabel>
            <Select
                labelId="select-audio-feature-label"
                id="select-audio-feature"
                value={audioFeature}
                label="Audio Feature"
                onChange={handleChange}
            >
                <MenuItem value={'acousticness'}>Acousticness</MenuItem>
                <MenuItem value={'danceability'}>Danceability</MenuItem>
                <MenuItem value={'energy'}>Energy</MenuItem>
                <MenuItem value={'loudness'}>Loudness</MenuItem>
                <MenuItem value={'valence'}>Energy</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SelectAudiFeatureComp;