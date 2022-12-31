import { Drawer } from "@mui/material";

const MenuDrawerComp = () => {

    return(
        <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
        >
          </Drawer>
    ); 
}