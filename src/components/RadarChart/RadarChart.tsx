import { scaleLinear, select, selectAll } from "d3";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTracks } from "../../slices/spotifySlice";


const RadarChartComp = () => {
    const tracks = useSelector(selectTracks);
    const width = 1000;
    const height = 300;

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
        
        const data = [
            {
                axes: [
                  {axis: "acousticness", value: findAverage(acousticnessValues)},
                  {axis: "danceability", value: findAverage(danceabilityValues)},
                  {axis: "energy", value: findAverage(energyValues)},  
                  {axis: "loudness", value: findAverage(loudnessValues)},  
                  {axis: "valence", value: findAverage(valenceValues)}
                ]
              },
        ]

        
    
        // svg.selectAll("circle")
        // .data(ticks)
        // .join(
        //     enter => enter.append("circle")
        //         .attr("cx", width / 2)
        //         .attr("cy", height / 2)
        //         .attr("fill", "none")
        //         .attr("stroke", "gray")
        //         .attr("r", d => radialScale(d))
        // );

        
        
    },[tracks])

    const svg = select('spider-chart');

    const radialScale = scaleLinear()
        .domain([0,100])
        .range([0,2500]);
    const ticks = [20,40,60,80,100];
    

    useEffect(() => {
        selectAll(".tick-label")
        .data(ticks)
        .text(d => d.toString())
    },[])



    return(
        // <svg width={'100%'} viewBox={`0 0 ${width + 200} ${height + 30}`}>
        // somehting like above for responsive ness
        <svg className="spider-chart" width={'100%'} viewBox={`0 0 ${width} ${height}`}>
            {ticks.map((index,tick) =>
                <g key={index}>
                    <text
                        x={width / 2 + 5}
                        y={height / 2 - radialScale(tick) - 12}
                        className='tick-label'  
                    >
                    </text> 
                    <circle
                        cx={width/2}
                        cy={height/2}
                        fill="none"
                        stroke="gray"
                        r={radialScale(tick) + 10}
                    >
                    </circle>
                </g>
            )}
        </svg>
    )
}

export default RadarChartComp;