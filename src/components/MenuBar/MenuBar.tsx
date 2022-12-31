import { useDispatch, useSelector } from "react-redux";
import { selectMenuOpen, toggleMenu } from "../../slices/menuSlice";
import MenuBarComp from "./MenuBarComp";

const MenuBar = () => {
    const dispatch = useDispatch();
    const open = useSelector(selectMenuOpen);
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