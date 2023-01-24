import { NumberValue, ScaleLinear } from "d3";

interface props {
    features:string[],
    width:number,
    height:number,
    radialScale:ScaleLinear<number, number, never>,
    angleToCoordinate:(angle: number, value: NumberValue) => {"x": number, "y": number}
}

const Axes = ({features,width,height,radialScale,angleToCoordinate}:props) => {

    

    // const angleToCoordinate = (angle: number, value: NumberValue) => {
    //     const x = Math.cos(angle) * radialScale(value);
    //     const y = Math.sin(angle) * radialScale(value);
    //     return {"x": width / 2 + x, "y": height / 2 - y};
    // }

    const featureData = features.map((feature, index) => {
        const angle = (Math.PI / 2) + (2 * Math.PI * index / features.length);
        return {
            "name": feature,
            "angle": angle,
            "line_coord": angleToCoordinate(angle, 4.43),
            "label_coord": angleToCoordinate(angle, 5)
        };
    });
    
    return(
        <g>
            {featureData.map((feature,index) =>
                <line
                    x1={width/2}
                    y1={height/2}
                    x2={feature.line_coord.x}
                    y2={feature.line_coord.y}
                    stroke={'black'}
                    key={index}
                />
            )}
            {featureData.map((feature,index) => 
                <text
                    className="axis-label"
                    x={index < 3 ? feature.label_coord.x - (feature.name.length * 7) : feature.label_coord.x}
                    y={feature.label_coord.y}
                    key={index}
                >
                    {feature.name}
                </text>
            )}
        </g>
    );
}

export default Axes;