import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GenericObject } from "../../types";
import SelectAlbum from "../SelectAlbum/SelectAlbum";

interface MenuDrawerCompProps {
    open:boolean;
    themeColors:GenericObject;
    isLoading:boolean;
    handleClose:(value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const MenuDrawerComp = ({open,themeColors,isLoading,handleClose}:MenuDrawerCompProps) => {

    return(
        <Drawer
            anchor={'left'}
            open={open}
            onClose={handleClose(false)}
        >
            <Box
                sx={{ width: 300 }}
                role="presentation"
                onClick={handleClose(false)}
                onKeyDown={handleClose(false)}
            >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    flexGrow: 1,
                                    color:isLoading ? 'inherit' :  themeColors.colorOne.fontColor
                                }}
                            >
                                Edit Theme
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleClose(false)}
                            >
                                <ArrowBackIosNewIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{paddingX:1,paddingTop:4}}>
                        <SelectAlbum/>
                    </Box>
                </Box>
            </Box>

        </Drawer>
    ); 
}

export default MenuDrawerComp;