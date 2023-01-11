import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { selectThemeColors } from '../../slices/ThemeSlice';
import { selectIsLoggedIn, selectShowGraph } from '../../slices/spotifySlice';

interface MenuBarCompProps {
    handleClick:() => void;
}

const MenuBarComp = ({handleClick}:MenuBarCompProps) => {

    const themeColors = useSelector(selectThemeColors);
    const showGraph = useSelector(selectShowGraph);
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    {isLoggedIn &&
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
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
                        My Favs
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default MenuBarComp;