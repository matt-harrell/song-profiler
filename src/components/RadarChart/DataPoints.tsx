import  { NumberValue, ScaleLinear, selectAll,line, select } from "d3";
import { useEffect,useRef } from "react";

interface axes {
    acousticness: number;
    danceability: number;
    energy: number;
    loudness: number;
    valence: number;
}



interface props {
    data:axes[],
    features:string[],
    width:number,
    height:number,
    radialScale:ScaleLinear<number, number, never>
}

const DataPoints = ({data,features,width,height,radialScale}:props) => {


    const graph = useRef(null);

    const angleToCoordinate = (angle: number, value: NumberValue) => {
        const x = Math.cos(angle) * radialScale(value);
        const y = Math.sin(angle) * radialScale(value);
        return {"x": width / 2 + x, "y": height / 2 - y};
    }

    const theLine = line<{x:number,y:number}>()
        .x(d => d.x)
        .y(d => d.y)

    const getPathCoordinates = (dataPoint:axes) => {
        let coordinates = [];
        for (let i = 0; i < features.length; i++){
            const ft_name = features[i];
            const angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
            coordinates.push(angleToCoordinate(angle, dataPoint[ft_name as keyof axes] / 22.95));
        }
        
        return coordinates;
    }

    // const fakeData = [
    //     {
    //     acousticness: 100,
    //     danceability: 100,
    //     energy:100,  
    //     loudness:100,  
    //     valence:100
    // }
    // ]

    

    useEffect(() => {
        selectAll('.spider-path')
        .data(data)
        .datum(d => getPathCoordinates(d))
        .attr("d",theLine)
    },[data])

    

    return(
        <g ref={graph}>
            {data.map((point,index) => 
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