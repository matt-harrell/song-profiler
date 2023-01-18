import { scaleBand, scaleLinear } from 'd3';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAudioFeature } from '../../slices/filterButtonsSlice';
import { selectTracks } from '../../slices/spotifySlice';
import Bar from './Bars';
import XYAxis from './XYAxis';

// create svg 
const Histogram = () => {
    const tracks = useSelector(selectTracks);
    const audioFeature = useSelector(selectAudioFeature);
    const [height,setHeight] = useState(window.screen.width <= 600 ? tracks.length * 50 : tracks.length * 20)
    const [width,setWidth] = useState(window.screen.width <= 600 ? 200 : 800);

    useEffect(() => {
        const handleResize = () => {
            if(window.screen.width <= 600){
                setHeight(tracks.length * 50);
                setWidth(200)
            }else{
                setHeight(tracks.length * 20);
                setWidth(800)
            }
        }
        handleResize();
        window.addEventListener('resize',handleResize)
    },[tracks.length])

    

    

    const yScale = scaleBand()
      .domain(tracks.map(d => d.shortName).reverse())
      .range([height + 20,20])
      .padding(.10);

    const xScale = scaleLinear()
    .domain([0,100])
    .range([0, width]);

    
    return(
        <>
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
        </>
        
    );
}

export default Histogram;
