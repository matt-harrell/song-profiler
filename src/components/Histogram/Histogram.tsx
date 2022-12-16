import { scaleBand, scaleLinear } from 'd3';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAudioFeature } from '../../features/filterButtonsSlice';
import { selectTracks } from '../../features/spotifySlice';
import Bar from './Bars';
import XYAxis from './XYAxis';

// create svg 
const Histogram = () => {
    const tracks = useSelector(selectTracks);
    const audioFeature = useSelector(selectAudioFeature);

    // const height = window.screen.width < 600 ? tracks.length * 50 : tracks.length * 20;
    const [height,setHeight] = useState(tracks.length * 50)
    // const width = window.screen.width < 600 ? 200 : 800; 
    const [width,setWidth] = useState(200);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize',handleResize,false)
    },[])

    const handleResize = () => {
        if(window.screen.width <= 600){
            setHeight(tracks.length * 50);
            setWidth(200)
        }else{
            setHeight(tracks.length * 20);
            setWidth(800)
        }
    }

    

    const yScale = scaleBand()
      .domain(tracks.map(d => d.shortName))
      .range([height,20])
      .padding(.10);

    const xScale = scaleLinear()
    .domain([0,100])
    .range([0, width]);

    
    return(
        <svg width={'100%'} viewBox={`0 0 ${width + 200} ${height + 30}`}>
            <XYAxis 
                xScale={xScale} 
                yScale={yScale}             
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
