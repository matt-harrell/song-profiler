// bars for chart 
// each bar is a different color
import { Tooltip, Typography } from "@mui/material";
import { ScaleBand, ScaleLinear, selectAll } from "d3";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectAudioFeature } from "../../features/filterButtonsSlice";
import { selectTracks } from "../../features/spotifySlice";
import { selectThemeColors } from "../../features/ThemeSlice";

interface props {
    xScale:ScaleLinear<number, number, never>,
    yScale: ScaleBand<string>,
    property:string
    
}



const Bar = ({xScale,yScale,property}:props) => {
    const tracks = useSelector(selectTracks);
    const rect = useRef(null);
    const [yTextPadding, setYTextPadding] = useState(30);
    const audioFeature = useSelector(selectAudioFeature);
    const themeColors  = useSelector(selectThemeColors);
    const [fill,setFill] = useState('black');

    useEffect(() => {
        selectAll('.bar')
            .data(tracks)
            .transition()
            .attr('width', d => xScale(d[property]));
    },[tracks,property,xScale])

    useEffect(() => {
        handleResize();
        window.addEventListener('resize',handleResize,false)
    },[])

    useEffect(() =>{
        switch (audioFeature) {
            case 'acousticness':
                setFill(themeColors.colorOne.color)
                break;
            case 'danceability':
                setFill(themeColors.colorTwo.color)
                break;
            case 'energy':
                setFill(themeColors.colorThree.color)
                break;
            case 'loudness':
                setFill(themeColors.colorFour.color)
                break;
            case 'valence':
                setFill(themeColors.colorFive.color)
                break;
            default:
                break;
        }
    },[audioFeature,themeColors])

    const handleResize = () => {
        if(window.screen.width <= 600){
            setYTextPadding(30)
        }else{
            setYTextPadding(14)
        }
    }

    return (
        <>
            {tracks.map((track, index) =>
                <Tooltip
                    title={
                        <Typography color="inherit">{track.name} - {track.artistsNames}</Typography>
                    }
                    followCursor
                    key={index}
                >
                    <g>

                        <rect
                            x={0}
                            y={yScale(track.shortName)}
                            height={yScale.bandwidth()}
                            width={150 + xScale(track[property])}
                            fill={"rgba(0,0,0,0)"}
                            style={{ zIndex: '3', position: 'relative' }}
                        />
                        <rect
                            className="bar"
                            ref={rect}
                            x={150}
                            y={yScale(track.shortName)}
                            height={yScale.bandwidth()}
                            fill={fill}
                        // width={xScale(track[property])}
                        />

                        <text
                            x={track[property] < 10 ? xScale(track[property]) + 155 : xScale(track[property]) + 130}
                            y={(yScale(track.shortName) || 1) + yTextPadding}
                            fill={track[property] < 10 ? 'black' : 'white'}
                        >
                            {track[property]}
                        </text>
                    </g>
                </Tooltip>
            )}
        </>  
    );
}

export default Bar;