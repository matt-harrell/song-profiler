import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import { useSelector } from 'react-redux';
import { selectThemeColors } from '../../slices/ThemeSlice';
import { selectIsLoggedIn, selectisRejected, selectShowGraph } from '../../slices/spotifySlice';

interface MenuBarCompProps {
    handleMenuClick:() => void;
    handleInfoClick:() => void;
}

const MenuBarComp = ({handleMenuClick,handleInfoClick}:MenuBarCompProps) => {

    const themeColors = useSelector(selectThemeColors);
    const showGraph = useSelector(selectShowGraph);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRejected = useSelector(selectisRejected);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    {isLoggedIn && !isRejected &&
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    }
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                            flexGrow: 1,
                            color:showGraph ? 'inherit' :  themeColors.colorOne.fontColor
                        }}
                    >
                        Song Profiler
                    </Typography>
                    <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="info"
                            sx={{ ml: 2 }}
                            onClick={handleInfoClick}
                        >
                            <InfoIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuBarComp;