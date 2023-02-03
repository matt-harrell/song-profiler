import  { NumberValue, ScaleLinear, selectAll,line } from "d3";
import { useEffect,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBothDataColors, selectDataColors, selectRadarData, setDataColors } from "../../slices/radarChartSlice";
import { selectThemeColors } from "../../slices/ThemeSlice";

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

const DataPoints = ({features, angleToCoordinate}:props) => {

    const dispatch = useDispatch();
    const radarData = useSelector(selectRadarData);
    const dataColors = useSelector(selectDataColors);
    const themeColor = useSelector(selectThemeColors);

    const graph = useRef(null);

    useEffect(() => {
        if(dataColors.length === 0){
            const colorObject = {
                songTitle: "All Songs",
                currentColor: themeColor.colorOne.color,
                defaultColor:themeColor.colorOne.color,
            }
            dispatch(setDataColors([colorObject]));
        }else if(dataColors.find((color) => color.songTitle === 'All Songs')){
            const i = dataColors.findIndex((color) => color.songTitle === 'All Songs');
            dispatch(changeBothDataColors({index:i,color:themeColor.colorOne.color}))
        }
    },[themeColor.colorOne.color,dispatch])

    

    

    useEffect(() => {
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

        if(radarData.length > 0) {
            selectAll('.spider-path')
            .data(radarData)
            .datum(d => getPathCoordinates(d))
            .attr("d",theLine)
        }
    },[radarData,features,angleToCoordinate])

    

    return(
        <g ref={graph}>
            {radarData.map((point,index) => 
                <path
                    className="spider-path"
                    strokeWidth={3}
                    stroke={dataColors[index]?.currentColor}
                    fill={dataColors[index]?.currentColor}
                    strokeOpacity={1}
                    opacity={.5}
                    key={index}
                />
            )}
        </g>
    );
}

export default DataPoints;