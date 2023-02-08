import { Drawer, Box, AppBar, Toolbar, Typography, IconButton, Divider } from "@mui/material";
import ChangeChart from "../ChangeChart/ChangeChart";
import SelectAlbum from "../SelectAlbum/SelectAlbum";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { GenericObject } from "../../types";
import RCThemeColors from "../ThemeColors/RadarChartThemeColors/RCThemeColors";
import BCThemeColors from "../ThemeColors/BarCharThemeColors/BCThemeColors";

interface DrawerCompProps {
    open:boolean;
    themeColors:GenericObject;
    isLoading:boolean;
    showRadarChart:boolean;
    handleClose:(value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const DrawerComp = ({open,themeColors,isLoading,showRadarChart,handleClose}:DrawerCompProps) => {
    return (
        <Drawer
            anchor={'left'}
            open={open}
            onClose={handleClose(false)}
        >
            <Box
                sx={{ width: 300 }}
                role="presentation"
            >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="sticky">
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
                    <Box sx={{marginTop:4}}>
                    <Typography variant="h5" component='h2' sx={{marginY:2,textAlign:'center'}}>Change chart</Typography>
                        <ChangeChart/>
                        <Divider sx={{marginY:4}}/>
                        <SelectAlbum/>
                        <Divider sx={{marginY:4}}/>
                        <Typography variant="h5" component='h2' sx={{marginY:2,textAlign:'center'}}>Theme Colors</Typography>
                        {showRadarChart ? <RCThemeColors/> : <BCThemeColors/>}
                    </Box>
                    
                </Box>
            </Box>

        </Drawer>
    );
}

export default DrawerComp;