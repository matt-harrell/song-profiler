import { useDispatch, useSelector } from "react-redux";
import { selectMenuOpen, toggleMenu } from "../../slices/menuSlice";
import { selectShowRadarChart } from "../../slices/radarChartSlice";
import { selectLoading } from "../../slices/spotifySlice";
import { selectThemeColors } from "../../slices/ThemeSlice";
import DrawerComp from "./DrawerComp";

const Drawer = () => {

    const dispatch = useDispatch();
    const open = useSelector(selectMenuOpen);
    const isLoading = useSelector(selectLoading)
    const themeColors = useSelector(selectThemeColors);
    const showRadarChart = useSelector(selectShowRadarChart);

    const handleClose = (value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        dispatch(toggleMenu(value));
    }

    return (
        <DrawerComp
            open={open}
            themeColors={themeColors}
            isLoading={isLoading}
            showRadarChart={showRadarChart}
            handleClose={handleClose}
        />
    );
}

export default Drawer;