import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { selectThemeColors } from '../../slices/ThemeSlice';
import { selectLoading } from '../../slices/spotifySlice';

interface MenuBarCompProps {
    handleClick:() => void;
}

const MenuBarComp = ({handleClick}:MenuBarCompProps) => {

    const themeColors = useSelector(selectThemeColors);
    const isLoading = useSelector(selectLoading);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
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
                    <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                            flexGrow: 1,
                            color:isLoading ? 'inherit' :  themeColors.colorOne.fontColor
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