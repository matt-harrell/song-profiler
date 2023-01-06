import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoading } from "../slices/spotifySlice";
import { selectThemeColors } from "../slices/ThemeSlice";

type props = {
    children: React.ReactNode; // 👈️ type children
  };

const ThemeComp = ({children}:props) => {

    const themeColors = useSelector(selectThemeColors);
    const isLoading = useSelector(selectLoading);

    const theme = createTheme({
        palette:{
            primary:{
                main: isLoading ? '#1976d2' : themeColors.colorOne.color,
                contrastText:isLoading ? '#fff' : themeColors.colorOne.fontColor,
            },
            text:{
                primary:isLoading ? 'rgba(0,0,0,0.87)' : themeColors.backgroundColor.fontColor,
                secondary:isLoading ? 'rgba(0,0,0,0.6)' : themeColors.backgroundColor.fontColor+'60',
                disabled:isLoading ? 'rgba(0,0,0,0.38)' : themeColors.backgroundColor.fontColor+'38',
            },
            background:{
                paper:isLoading ? '#fff' : themeColors.backgroundColor.color,
                default:isLoading ? '#fff' : themeColors.backgroundColor.color,
            },
            divider:isLoading ? 'rgba(0,0,0,0.12)' : themeColors.backgroundColor.fontColor+'12'
        },
        components:{
           MuiToggleButton:{
            styleOverrides:{
                root:{
                    color:isLoading ? 'initial' : themeColors.backgroundColor.fontColor
                }
            }
           },
            MuiTypography:{
                styleOverrides:{
                    root:{
                        color:isLoading ? 'initial' : themeColors.backgroundColor.fontColor,
                    }
                }
            }
        }
    })
    
    return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
    );
}

export default ThemeComp;