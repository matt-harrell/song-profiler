import { useDispatch, useSelector } from "react-redux";
import { selectIsInfoDrawerOpen, toggleInfoDrawer } from "../../slices/menuSlice";
import { selectLoading } from "../../slices/spotifySlice";
import { selectThemeColors } from "../../slices/ThemeSlice";
import InfoDrawerComp from "./InfoDrawerComp";

const InfoDrawer = () => {

    const dispatch = useDispatch();
    const open = useSelector(selectIsInfoDrawerOpen);
    const isLoading = useSelector(selectLoading)
    const themeColors = useSelector(selectThemeColors);

    const handleClose = (value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        dispatch(toggleInfoDrawer(value));
    }

    return(
        <InfoDrawerComp
            open={open} 
            themeColors={themeColors} 
            isLoading={isLoading} 
            handleClose={handleClose}           
        />
    );
}

export default InfoDrawer;