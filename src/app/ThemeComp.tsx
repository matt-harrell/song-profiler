import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { selectThemeColors } from "../features/ThemeSlice";

type props = {
    children: React.ReactNode; // 👈️ type children
  };

const ThemeComp = ({children}:props) => {

    const themeColors = useSelector(selectThemeColors)

    const theme = createTheme({
        palette:{
            primary:{
                main:themeColors.colorOne.color,
                contrastText:themeColors.colorOne.fontColor,
            },
            text:{
                primary:themeColors.backgroundColor.fontColor,
                secondary:themeColors.backgroundColor.fontColor+'60',
                disabled:themeColors.backgroundColor.fontColor+'38',
            },
            background:{
                paper:themeColors.backgroundColor.color,
                default:themeColors.backgroundColor.color,
            },
            divider:themeColors.backgroundColor.fontColor+'12'
        },
        components:{
           MuiToggleButton:{
            styleOverrides:{
                root:{
                    color:themeColors.backgroundColor.fontColor
                }
            }
           },
            MuiTypography:{
                styleOverrides:{
                    root:{
                        color:themeColors.backgroundColor.fontColor,
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