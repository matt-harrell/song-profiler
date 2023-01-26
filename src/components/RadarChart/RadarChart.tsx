import { NumberValue, scaleLinear } from "d3";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumOfTracks } from "../../slices/filterButtonsSlice";
import { selectCurrentTrack, selectHeight, selectWidth, setRadarData, selectData, setshowRadarChart } from "../../slices/radarChartSlice";
import { selectTracks, setCurrentAlbum } from "../../slices/spotifySlice";
import Axes from "./Axes";
import DataPoints from "./DataPoints";
import Ticks from "./Ticks";

const RadarChartComp = () => {
    const dispatch = useDispatch();
    const tracks = useSelector(selectTracks);
    const width = useSelector(selectWidth);
    const height = useSelector(selectHeight);
    const features = ["acousticness","danceability","energy","loudness", "valence"];
    const data = useSelector(selectData);

    useEffect(() => {
        dispatch(setshowRadarChart(true))
        dispatch(setNumOfTracks(50));
        dispatch(setCurrentAlbum(0));
    },[])
    

    useEffect(() => {
            const acousticnessValues = tracks.map(track => track.acousticness);
            const danceabilityValues = tracks.map(track => track.danceability);
            const energyValues = tracks.map(track => track.energy);
            const loudnessValues = tracks.map(track => track.loudness);
            const valenceValues = tracks.map(track => track.valence);

            const findAverage = (array:number[]) => Math.round(array.reduce((accumulator:number,currentValue:number) => {
                            const add = accumulator + currentValue
                            return add;
                        }) / array.length)
    
            dispatch(setRadarData([{
                acousticness: findAverage(acousticnessValues),
                danceability: findAverage(danceabilityValues),
                energy:findAverage(energyValues),  
                loudness:findAverage(loudnessValues),  
                valence:findAverage(valenceValues),
            }]))
        
    },[])

    const radialScale = scaleLinear()
        .domain([0,100])
        .range([0,2500]);

    
    const angleToCoordinate = (angle: number, value: NumberValue) => {
            const x = Math.cos(angle) * radialScale(value);
            const y = Math.sin(angle) * radialScale(value);
            return {"x": width / 2 + x, "y": height / 2 - y};
        }

    return(
        <svg className="spider-chart" width={'100%'} viewBox={`0 0 ${width} ${height}`}>
            <Ticks
                width={width}
                height={height}
                radialScale={radialScale}
            />
            <Axes
                features={features}
                width={width}
                height={height}
                radialScale={radialScale}
                angleToCoordinate={angleToCoordinate}
            />
            <DataPoints
                features={features}
                width={width}
                height={height}
                radialScale={radialScale}
                angleToCoordinate={angleToCoordinate}
            />
        </svg>
    )
}

export default RadarChartComp;