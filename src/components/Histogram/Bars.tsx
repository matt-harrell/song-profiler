// bars for chart 
// each bar is a different color
// all scale to work on 100%
import { NumberValue, ScaleBand, ScaleLinear } from "d3";
import { useSelector } from "react-redux";
import { selectTracks } from "../../features/spotifySlice";

interface props {
    xScale:ScaleLinear<number, number, never>,
    yScale: ScaleBand<string>,
    property:string
    
}



const Bar = ({xScale,yScale,property}:props) => {
    const tracks = useSelector(selectTracks);

    const handleXScale = (index:number,objectProp:string):NumberValue => {
        if(objectProp === 'loudness'){
            return Math.round((tracks[index].loudness + 60) * (100/60));
        }else{
            return Math.round(tracks[index][objectProp] * 100);
        }
    }

    


    return (
        <g>
            {tracks.map((track,index) =>
            <g key={index}>
                <rect
                    x={300}
                    y={yScale(track.name)}
                    height={yScale.bandwidth()}
                    width={xScale(handleXScale(index,property))}
                />
                <text
                    x={xScale(handleXScale(index,property))+280}
                    y={(yScale(track.name) || 1) + 12.5}
                    fill={'white'}
                >
                    {property === 'loudness' ? Math.round((tracks[index].loudness + 60) * (100/60)) : Math.round(tracks[index][property] * 100)}
                </text>
            </g>  
            )}
        </g>  
    );
}

export default Bar;