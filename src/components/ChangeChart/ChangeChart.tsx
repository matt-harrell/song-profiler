import { useDispatch, useSelector } from "react-redux";
import { selectShowRadarChart, setShowRadarChart } from "../../slices/radarChartSlice";
import ChangeChartComp from "./ChangeChartComp";

const ChangeChart = () => {

    const dispatch = useDispatch();
    const showRadarChart = useSelector(selectShowRadarChart);

    const handleShowRadarChart = (event:React.MouseEvent<HTMLElement>,chart:string) => {
        if (chart !== null) {
            if (chart === 'bar') {
                dispatch(setShowRadarChart(false));
            }else if(chart === 'radar'){
                dispatch(setShowRadarChart(true));
            }
        }
    }


    return(
        <ChangeChartComp
            showRadarChart={showRadarChart}
            handleShowRadarChart={handleShowRadarChart}
        />
    );
}

export default ChangeChart