import { axisBottom, axisLeft, scaleBand, scaleLinear, select, ticks } from 'd3';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTracks } from '../features/spotifySlice';
import { GenericObject } from '../types';

// create svg 
const Histogram = () => {
    const tracks = useSelector(selectTracks);
    const height = tracks.length * 12; 

    const xMax = 100;
    const yMax = (data:GenericObject[]) => data.length;

    const yScale = scaleBand()
      .domain(tracks.map(d => d.name))
    //   .domain(['test'])
      .range([height,0]);

    const xScale = scaleLinear()
    .domain([0, Math.max(...tracks.map(d => d.acousticness * 100))])
    .range([height, 0])
    .nice();

    // x axis 
    const yAxis = useRef(null);
    const axis = axisLeft(yScale)
    useEffect(() => {
        // need to figure out types for this
        select<any,any>(yAxis.current).call(axis)
    },[tracks,axis])

    

    return(
        <svg width={'100%'} viewBox={`0 0 1200 ${height + 30}`}>
            <g 
                transform={`translate(400, 0)`}
                ref={yAxis}
            />
        </svg>
    );
}

export default Histogram;
