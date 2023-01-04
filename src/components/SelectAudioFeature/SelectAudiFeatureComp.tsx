import { FormControl,InputLabel,Select,MenuItem, SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAudioFeature } from "../../slices/filterButtonsSlice";
import { selectShowGraph } from "../../slices/spotifySlice";
import { selectThemeColors } from "../../slices/ThemeSlice";

interface props {
    handleChange:(e:SelectChangeEvent) => void;
}

const SelectAudiFeatureComp = ({handleChange}:props) => {
    
    const ThemeColors = useSelector(selectThemeColors);
    const audioFeature = useSelector(selectAudioFeature);
    const showGraph = useSelector(selectShowGraph);

    return (
        <FormControl style={{maxWidth:300}}>
            <InputLabel 
                id="select-audio-feature-label"
                sx={{color:showGraph ? ThemeColors.backgroundColor.fontColor : 'initial'}}
            >
                Audio Feature
            </InputLabel>
            <Select
                labelId="select-audio-feature-label"
                id="select-audio-feature"
                value={audioFeature}
                label="Audio Feature"
                onChange={handleChange}
                sx={{
                    color:showGraph ? ThemeColors.backgroundColor.fontColor : 'initial',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor:showGraph ? ThemeColors.backgroundColor.fontColor + "25" : 'initial',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor:showGraph ? ThemeColors.backgroundColor.fontColor + "25" : 'initial',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor:showGraph ? ThemeColors.backgroundColor.fontColor : 'initial',
                    },
                    '.MuiSvgIcon-root ': {
                      fill:showGraph ? ThemeColors.backgroundColor.fontColor : 'initial',
                    }
                  }}
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