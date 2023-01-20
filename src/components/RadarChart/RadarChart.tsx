import { scaleLinear } from "d3";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import { selectTracks } from "../../slices/spotifySlice";
import Axes from "./Axes";
import DataPoints from "./DataPoints";
import Ticks from "./Ticks";


const RadarChartComp = () => {
    const tracks = useSelector(selectTracks);
    const width = 1000;
    const height = 300;
    const features = ["acousticness","danceability","energy","loudness", "valence"]
    const [data,setData] = useState<any>([]);

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
        
        const dataArray = [
            {
            acousticness: findAverage(acousticnessValues),
            danceability: findAverage(danceabilityValues),
            energy:findAverage(energyValues),  
            loudness:findAverage(loudnessValues),  
            valence:findAverage(valenceValues)
        }
        ]
        console.log(dataArray);
        

        setData([...dataArray])

        
        
    },[tracks])

    const radialScale = scaleLinear()
        .domain([0,100])
        .range([0,2500]);
    
    

    



    return(
        // <svg width={'100%'} viewBox={`0 0 ${width + 200} ${height + 30}`}>
        // somehting like above for responsive ness
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
            />
            <DataPoints
                data={data}
                features={features}
                width={width}
                height={height}
                radialScale={radialScale}
            />
        </svg>
    )
}

export default RadarChartComp;