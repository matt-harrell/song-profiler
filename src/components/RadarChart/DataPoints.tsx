import  { NumberValue, ScaleLinear, selectAll,line } from "d3";
import { useEffect,useRef } from "react";
import { useSelector } from "react-redux";
import { selectRadarData } from "../../slices/radarChartSlice";

interface axes {
    acousticness: number;
    danceability: number;
    energy: number;
    loudness: number;
    valence: number;
}



interface props {
    features:string[],
    width:number,
    height:number,
    radialScale:ScaleLinear<number, number, never>,
    angleToCoordinate:(angle: number, value: NumberValue) => {"x": number, "y": number}
}

const DataPoints = ({features,width,height,radialScale, angleToCoordinate}:props) => {

    const radarData = useSelector(selectRadarData);

    const graph = useRef(null);

    const theLine = line<{x:number,y:number}>()
        .x(d => d.x)
        .y(d => d.y)

    

    

    useEffect(() => {

        const getPathCoordinates = (dataPoint:axes) => {
            let coordinates = [];
            for (let i = 0; i < features.length; i++){
                const ft_name = features[i];
                const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
                coordinates.push(angleToCoordinate(angle, dataPoint[ft_name as keyof axes] / 22.95));
            }
            
            return coordinates;
        }

        if(radarData.length > 0) {
            selectAll('.spider-path')
            .data(radarData)
            .datum(d => getPathCoordinates(d))
            .attr("d",theLine)
        }
    },[radarData,theLine,features,angleToCoordinate])

    

    return(
        <g ref={graph}>
            {radarData.map((point,index) => 
                <path
                    className="spider-path"
                    strokeWidth={3}
                    stroke="black"
                    fill="black"
                    strokeOpacity={1}
                    opacity={.5}
                    key={index}
                />
            )}
        </g>
    );
}

export default DataPoints;