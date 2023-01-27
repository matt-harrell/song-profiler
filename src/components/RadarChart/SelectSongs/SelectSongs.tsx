import { prominent } from "color.js";
import { SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataColor, setDataColors, setRadarData } from "../../../slices/radarChartSlice";
import { selectTracks } from "../../../slices/spotifySlice";
import { selectThemeColors } from "../../../slices/ThemeSlice";
import SelectSongsComp from "./SelectSongsComp";

const SelectSongs = () => {

    const dispatch = useDispatch();
    const tracks = useSelector(selectTracks)
    const [songTitles, setSongTitles] = useState<string[]>([])
    const [value, setValue] = useState<string[]>([]);
    const themeColor = useSelector(selectThemeColors);

    useEffect(() => {
        const trackTitles = tracks.map(track => track.name)
        trackTitles.unshift('All Songs')

        setSongTitles([...trackTitles])
        setValue([trackTitles[0]])

    },[tracks])

    const handleChange = (e:SyntheticEvent<Element, Event>,songs:string[]) => {
        let songsToPass = [];
        let colorsToPass:dataColor[] = [];
        setValue([...songs]);

        if(songs.includes('All Songs')){

            const findAverage = (array:number[]) => Math.round(array.reduce((accumulator:number,currentValue:number) => {
                const add = accumulator + currentValue
                return add;
            }) / array.length)

            const acousticnessValues = tracks.map(track => track.acousticness);
            const danceabilityValues = tracks.map(track => track.danceability);
            const energyValues = tracks.map(track => track.energy);
            const loudnessValues = tracks.map(track => track.loudness);
            const valenceValues = tracks.map(track => track.valence);
            songsToPass.push({
                acousticness: findAverage(acousticnessValues),
                danceability: findAverage(danceabilityValues),
                energy:findAverage(energyValues),  
                loudness:findAverage(loudnessValues),  
                valence:findAverage(valenceValues),
            })
            const colorObject = {
                songTitle: "All Songs",
                color: themeColor.colorOne.color,
            }
            colorsToPass = [...colorsToPass, colorObject]
            dispatch(setDataColors(colorsToPass));
        }

        songs.forEach((song) => {
            if (song !== "All Songs") {
                const songToAdd = tracks.find(track => track.name === song);
                songsToPass.push({
                    acousticness: songToAdd?.acousticness,
                    danceability: songToAdd?.danceability,
                    energy: songToAdd?.energy,
                    loudness: songToAdd?.loudness,
                    valence: songToAdd?.valence,
                })

                const config = {
                    amount: 1,
                    format: 'hex',
                    group: 30,

                }

                prominent(songToAdd?.albumImage, config)
                    .then(color => {
                        const colorObject = {
                            songTitle: songToAdd?.name,
                            color: color.toString(),
                        }
                        colorsToPass = [...colorsToPass, colorObject]
                        dispatch(setDataColors(colorsToPass));
                    }
                    )
            }
        })

        
        
        dispatch(setRadarData(songsToPass))
        
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