import { Autocomplete, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTracks } from "../../../slices/spotifySlice";

interface props{
    songTitles:string[];
}

const SelectSongsComp = ({songTitles}:props) => {

    const tracks = useSelector(selectTracks);

    


    return(
        <Autocomplete
            multiple
            id="tags-standard"
            options={songTitles}
            getOptionLabel={(option) => option}
            defaultValue={[songTitles[0]]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    label="Multiple values"
                    placeholder="Favorites"
                />
            )}
        />
    );
}

export default SelectSongsComp;