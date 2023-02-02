import { Autocomplete, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

interface props{
    songTitles:string[],
    value:string[],
    handleChange: (e: SyntheticEvent<Element, Event>, songs: string[]) => void,
}

const SelectSongsComp = ({songTitles,value,handleChange}:props) => {

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
        />
    );
}

export default SelectSongsComp;