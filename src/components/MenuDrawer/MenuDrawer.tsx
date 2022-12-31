import { useDispatch, useSelector } from "react-redux";
import { selectMenuOpen, toggleMenu } from "../../slices/menuSlice";
import MenuDrawerComp from "./MenuDrawerComp";

const MenuDrawer = () => {

    const dispatch = useDispatch();
    const open = useSelector(selectMenuOpen);
    
    const handleClose = (value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        dispatch(toggleMenu(value));
    }

    return(
        <MenuDrawerComp
            open={open}
            handleClose={handleClose}
        />
    );
}

export default MenuDrawer;