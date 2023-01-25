import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTracks } from "../../../slices/spotifySlice";
import SelectSongsComp from "./SelectSongsComp";

const SelectSongs = () => {
    
    const tracks = useSelector(selectTracks)
    const [songTitles, setSongTitles] = useState<string[]>([])

    useEffect(() => {
        const trackTitles = tracks.map(track => track.name)

        setSongTitles([...trackTitles])
        trackTitles.unshift('All Songs')

    },[tracks])

    return(
        <SelectSongsComp
            songTitles={songTitles}
        />
    );
}

export default SelectSongs;