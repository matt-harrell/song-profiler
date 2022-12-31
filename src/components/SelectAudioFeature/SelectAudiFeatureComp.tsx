import { FormControl,InputLabel,Select,MenuItem, SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAudioFeature } from "../../slices/filterButtonsSlice";
import { selectLoading } from "../../slices/spotifySlice";
import { selectThemeColors } from "../../slices/ThemeSlice";

interface props {
    handleChange:(e:SelectChangeEvent) => void;
}

const SelectAudiFeatureComp = ({handleChange}:props) => {
    
    const ThemeColors = useSelector(selectThemeColors);
    const audioFeature = useSelector(selectAudioFeature);
    const isLoading = useSelector(selectLoading);

    return (
        <FormControl style={{maxWidth:300}}>
            <InputLabel 
                id="select-audio-feature-label"
                sx={{color:isLoading ? 'initial' : ThemeColors.backgroundColor.fontColor}}
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
                    color:isLoading ? 'initial' : ThemeColors.backgroundColor.fontColor,
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor:isLoading ? 'initial' : ThemeColors.backgroundColor.fontColor + "25",
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor:isLoading ? 'initial' : ThemeColors.backgroundColor.fontColor + "25",
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor:isLoading ? 'initial' : ThemeColors.backgroundColor.fontColor,
                    },
                    '.MuiSvgIcon-root ': {
                      fill:isLoading ? 'initial' : ThemeColors.backgroundColor.fontColor,
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