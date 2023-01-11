import { useDispatch } from "react-redux";
import { toggleMenu } from "../../slices/menuSlice";
import MenuBarComp from "./MenuBarComp";

const MenuBar = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(toggleMenu(true));
    }

    return (
        <MenuBarComp
            handleClick={handleClick}
        />
    );
}

export default MenuBar;