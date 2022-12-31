import { useDispatch, useSelector } from "react-redux";
import { selectMenuOpen, toggleMenu } from "../../slices/menuSlice";
import { selectLoading } from "../../slices/spotifySlice";
import { selectThemeColors } from "../../slices/ThemeSlice";
import MenuDrawerComp from "./MenuDrawerComp";

const MenuDrawer = () => {

    const dispatch = useDispatch();
    const open = useSelector(selectMenuOpen);
    const isLoading = useSelector(selectLoading)
    const themeColors = useSelector(selectThemeColors);
    
    const handleClose = (value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        dispatch(toggleMenu(value));
    }

    return(
        <MenuDrawerComp
            open={open}
            themeColors={themeColors}
            isLoading={isLoading}
            handleClose={handleClose}
        />
    );
}

export default MenuDrawer;