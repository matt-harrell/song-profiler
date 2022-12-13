import { scaleBand, scaleLinear } from 'd3';
import { useSelector } from 'react-redux';
import { selectAudioFeature } from '../../features/filterButtonsSlice';
import { selectTracks } from '../../features/spotifySlice';
import Bar from './Bars';
import XYAxis from './XYAxis';

// create svg 
const Histogram = () => {
    const tracks = useSelector(selectTracks);
    const height = tracks.length * 20; 
    const audioFeature = useSelector(selectAudioFeature);

    const yScale = scaleBand()
      .domain(tracks.map(d => d.name))
      .range([height,0])
      .padding(0.26);

    const xScale = scaleLinear()
    .domain([0,100])
    .range([0, 550]);

    
    return(
        <svg width={'100%'} viewBox={`0 0 1000 ${height + 30}`}>
            <XYAxis 
                xScale={xScale} 
                yScale={yScale} 
                height={height}            
            />
            <Bar
               xScale={xScale} 
               yScale={yScale}
               property={audioFeature} 
            />
        </svg>
    );
}

export default Histogram;
