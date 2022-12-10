import { scaleBand, scaleLinear } from 'd3';
import { useSelector } from 'react-redux';
import { selectTracks } from '../../features/spotifySlice';
import XYAxis from './XYAxis';

// create svg 
const Histogram = () => {
    const tracks = useSelector(selectTracks);
    const height = tracks.length * 12; 

    const yScale = scaleBand()
      .domain(tracks.map(d => d.name))
      .range([height,0]);

    const xScale = scaleLinear()
    .domain([0, 100])
    .range([0, 550]);

    
    return(
        <svg width={'100%'} viewBox={`0 0 1000 ${height + 30}`}>
            <XYAxis 
                xScale={xScale} 
                yScale={yScale} 
                height={height}            
            />
        </svg>
    );
}

export default Histogram;
