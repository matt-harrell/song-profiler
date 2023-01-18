import { axisLeft, select, Axis, ScaleLinear, ScaleBand, axisTop } from "d3";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectTracks } from "../../slices/spotifySlice";
import { selectThemeColors } from "../../slices/ThemeSlice";

interface props {
    xScale:ScaleLinear<number, number, never>,
    yScale: ScaleBand<string>,
}

const XYAxis = ({ xScale, yScale }:props) => {
    const tracks = useSelector(selectTracks);
    const themeColors = useSelector(selectThemeColors);

    // y axis 
    const yAxis = useRef(null);
    const leftAxis = axisLeft(yScale);

    // xAxis
    const xAxis = useRef(null);
    const topAxis = axisTop(xScale);

    useEffect(() => {
        select<SVGGElement, Axis<number>>(xAxis.current || "").call(topAxis)
        select<SVGGElement, Axis<string>>(yAxis.current || "").call(leftAxis)
    }, [tracks, leftAxis, topAxis])

    useEffect(() =>{
        select(yAxis.current || '').select('.domain').attr('stroke',themeColors.backgroundColor.fontColor);
        select(yAxis.current || '').selectAll('.tick line').attr('stroke',themeColors.backgroundColor.fontColor);
        select(yAxis.current || '').selectAll('.tick text').attr('fill',themeColors.backgroundColor.fontColor);


        select(xAxis.current || '').select('.domain').attr('stroke',themeColors.backgroundColor.fontColor);
        select(xAxis.current || '').selectAll('.tick line').attr('stroke',themeColors.backgroundColor.fontColor);
        select(xAxis.current || '').selectAll('.tick text').attr('fill',themeColors.backgroundColor.fontColor);
    },[themeColors.backgroundColor.fontColor,tracks])


    return (
        <g>
            <g
                transform={`translate(150, 0)`}
                ref={yAxis}
            />
            <g
                transform={`translate(150, 20)`}
                ref={xAxis}
            />
        </g>
    );


}

export default XYAxis;