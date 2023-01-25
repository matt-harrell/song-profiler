import { SyntheticEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTracks } from "../../../slices/spotifySlice";
import SelectSongsComp from "./SelectSongsComp";

const SelectSongs = () => {
    
    const tracks = useSelector(selectTracks)
    const [songTitles, setSongTitles] = useState<string[]>([])
    const [value, setValue] = useState<string[]>([]);

    useEffect(() => {
        const trackTitles = tracks.map(track => track.name)
        trackTitles.unshift('All Songs')

        setSongTitles([...trackTitles])
        setValue([trackTitles[0]])

    },[tracks])

    const handleChange = (e:SyntheticEvent<Element, Event>,songs:string[]) => {
        setValue([...songs]);
    }

    return(
        <SelectSongsComp
            songTitles={songTitles}
            value={value}
            handleChange={handleChange}
        />
    );
}

export default SelectSongs;