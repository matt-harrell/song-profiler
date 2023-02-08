import { useDispatch } from "react-redux";
import { toggleInfoDrawer, toggleMenu } from "../../slices/menuSlice";
import MenuBarComp from "./MenuBarComp";

const MenuBar = () => {
    const dispatch = useDispatch();

    const handleMenuClick = () => {
        dispatch(toggleMenu(true));
    }

    const handleInfoClick = () => {
        dispatch(toggleInfoDrawer(true));
    }


    return (
        <MenuBarComp
            handleMenuClick={handleMenuClick}
            handleInfoClick={handleInfoClick}
        />
    );
}

export default MenuBar;