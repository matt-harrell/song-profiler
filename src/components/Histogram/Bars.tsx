// bars for chart 
// each bar is a different color
// all scale to work on 100%
import { NumberValue, ScaleBand, ScaleLinear } from "d3";
import { useSelector } from "react-redux";
import { selectTracks } from "../../features/spotifySlice";
import { GenericObject } from "../../types";

interface props {
    xScale:ScaleLinear<number, number, never>,
    yScale: ScaleBand<string>,
    property:string
    
}



const Bar = ({xScale,yScale,property}:props) => {
    const tracks = useSelector(selectTracks);

    const handleXScale = (index:number,objectProp:string):NumberValue => {
        switch (property) {
            case 'loudness':
                return (tracks[index][objectProp] + 60) * (100/60);
        
            default:
                return -1;
        }
    }

    


    return (
        <g>
            {tracks.map((track,index) => 
                <rect
                    key={index}
                    x={300}
                    y={yScale(track.name)}
                    height={yScale.bandwidth()}
                    width={xScale(handleXScale(index,property))}
                />
            )}
        </g>  
    );
}

export default Bar;