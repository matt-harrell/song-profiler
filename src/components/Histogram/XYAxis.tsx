import { axisLeft, axisBottom, select, Axis, ScaleLinear, ScaleBand } from "d3";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectTracks } from "../../features/spotifySlice";

interface props {
    xScale:ScaleLinear<number, number, never>,
    yScale: ScaleBand<string>,
    height:number;
}

const XYAxis = ({ xScale, yScale, height }:props) => {
    const tracks = useSelector(selectTracks);

    // y axis 
    const yAxis = useRef(null);
    const leftAxis = axisLeft(yScale);

    // xAxis
    const xAxis = useRef(null);
    const bottomAxis = axisBottom(xScale);

    useEffect(() => {
        // need to figure out types for this
        select<SVGGElement, Axis<number>>(xAxis.current || "").call(bottomAxis)
        select<SVGGElement, Axis<string>>(yAxis.current || "").call(leftAxis)
    }, [tracks, leftAxis, bottomAxis])


    return (
        <g>
            <g
                transform={`translate(300, 0)`}
                ref={yAxis}
            />
            <g
                transform={`translate(300, ${height})`}
                ref={xAxis}
            />
        </g>
    );


}

export default XYAxis;