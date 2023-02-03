import { Autocomplete, Chip, TextField } from "@mui/material";
import { SyntheticEvent } from "react";
import { dataColor } from "../../../slices/radarChartSlice";

interface props{
    songTitles:string[],
    value:string[],
    dataColors:dataColor[];
    handleChange: (e: SyntheticEvent<Element, Event>, songs: string[]) => void,
}

const SelectSongsComp = ({songTitles,value,dataColors,handleChange}:props) => {

    return(
        <Autocomplete
            multiple
            id="tags-standard"
            options={songTitles}
            getOptionLabel={(option) => option}
            defaultValue={[songTitles[0]]}
            value={value}
            sx={{maxWidth:'30em',marginX:'auto'}}
            onChange={handleChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Multiple values"
                    placeholder="Songs"
                />
            )}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        sx={{backgroundColor:`${dataColors[dataColors.findIndex((color) => color.songTitle === option)]?.currentColor+50}`}}
                        label={`${option}`}
                        {...getTagProps({ index })}

                    />
                ))
            }
        />
    );
}

export default SelectSongsComp;