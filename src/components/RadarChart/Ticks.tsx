import { ScaleLinear, selectAll } from "d3";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectThemeColors } from "../../slices/ThemeSlice";

interface props {
    width:number,
    height:number,
    radialScale:ScaleLinear<number, number, never>
}

const Ticks = ({width,height,radialScale}:props) => {

    const ticks = [20,40,60,80,100];
    const themeColors = useSelector(selectThemeColors)

    useEffect(() => {
        selectAll(".tick-label")
        .data(ticks)
        .text(d => d.toString())
    },[])

    return(
        <g>
            {ticks.map((index,tick) =>
                <g key={index}>
                    <text
                        x={width / 2 + 5}
                        y={height / 2 - radialScale(tick) - 12}
                        className='tick-label'
                        fill={themeColors.backgroundColor.fontColor}  
                    >
                    </text> 
                    <circle
                        cx={width/2}
                        cy={height/2}
                        fill="none"
                        stroke={themeColors.backgroundColor.fontColor + 90}
                        r={radialScale(tick) + 10}
                    >
                    </circle>
                </g>
            )}
        </g>
    );
}

export default Ticks;