// bars for chart 
// each bar is a different color
// all scale to work on 100%
import { ScaleBand, ScaleLinear, selectAll } from "d3";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectTracks } from "../../features/spotifySlice";

interface props {
    xScale:ScaleLinear<number, number, never>,
    yScale: ScaleBand<string>,
    property:string
    
}



const Bar = ({xScale,yScale,property}:props) => {
    const tracks = useSelector(selectTracks);
    const rect = useRef(null);

    useEffect(() => {
        selectAll('.bar')
            .data(tracks)
            .transition()
            .attr('width', d => xScale(d[property]));
    },[tracks,property,xScale])

    return (
        <g>
            {tracks.map((track,index) =>
            <g key={index}>
                <rect
                    className="bar"
                    ref={rect}
                    x={300}
                    y={yScale(track.name)}
                    height={yScale.bandwidth()}
                    // width={xScale(track[property])}
                />
                <text
                    x={track[property] < 10 ? xScale(track[property])+ 305 : xScale(track[property]) + 280}
                    y={(yScale(track.name) || 1) + 12.5}
                    fill={track[property] < 10 ? 'black': 'white'}
                >
                    {track[property]}
                </text>
            </g>  
            )}
        </g>  
    );
}

export default Bar;