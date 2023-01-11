import { createSlice } from "@reduxjs/toolkit";

// TODO: create a theme colors object that holds all the colors

interface color {
    color:string,
    fontColor:string,
}
interface ThemeColors {
    colorOne:color,
    colorTwo:color,
    colorThree:color,
    colorFour:color,
    colorFive:color,
    backgroundColor:color,
}

const themeColors = {
    colorOne:{
        color:'#1976d2',
        fontColor:'#fff',
    },
    colorTwo:{
        color:'',
        fontColor:'',
    },
    colorThree:{
        color:'',
        fontColor:'',
    },
    colorFour:{
        color:'',
        fontColor:'',
    },
    colorFive:{
        color:'',
        fontColor:'',
    },
    backgroundColor:{
        color:'#FFFFFF',
        fontColor:'#000000',
    }
}

const defaultAlbumColors = {
    colorOne:{
        color:'',
        fontColor:'',
    },
    colorTwo:{
        color:'',
        fontColor:'',
    },
    colorThree:{
        color:'',
        fontColor:'',
    },
    colorFour:{
        color:'',
        fontColor:'',
    },
    colorFive:{
        color:'',
        fontColor:'',
    },
    backgroundColor:{
        color:'',
        fontColor:'',
    }
}

interface ThemeState {
    themeColors:ThemeColors;
    defaultAlbumColors:ThemeColors;
}

const initialState = {
    themeColors:themeColors,
    defaultAlbumColors:defaultAlbumColors,
} as ThemeState;

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        setThemeColors(state,action) {
            const invertColors = (hex: string) => {
                if (hex.indexOf('#') === 0) {
                    hex = hex.slice(1);
                }
                if (hex.length === 3) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                }
                if (hex.length !== 6) {
                    throw new Error('Invalid HEX color.');
                }
                let r:string | number = parseInt(hex.slice(0, 2), 16);
                let g:string | number = parseInt(hex.slice(2, 4), 16);
                let b:string | number = parseInt(hex.slice(4, 6), 16);
                
                return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                    ? '#000000'
                    : '#FFFFFF';
            }

            const themeKeys = Object.keys(state.themeColors);
            const albumKeys = Object.keys(state.defaultAlbumColors);
            for (let i = 0; i < themeKeys.length; i++) {
                const themeKey = themeKeys[i];
                const albumKey = albumKeys[i]; 
                state.themeColors[themeKey as keyof typeof state.themeColors].color = action.payload[i];
                state.themeColors[themeKey as keyof typeof state.themeColors].fontColor = invertColors(action.payload[i]);
                
                state.defaultAlbumColors[albumKey as keyof typeof state.themeColors].color = action.payload[i];
                state.defaultAlbumColors[albumKey as keyof typeof state.themeColors].fontColor = invertColors(action.payload[i]);
            }
            
        },
        changeThemeColors(state,action) {
            state.themeColors[action.payload.themeColor as keyof typeof state.themeColors].color = action.payload.color;
        },
        changeFontColors(state,action) {
            state.themeColors[action.payload.themeColor as keyof typeof state.themeColors].fontColor = action.payload.color;
        }
    }
});


export const selectThemeColors = (state: { themeSlice: { themeColors: ThemeColors; }; }) => state.themeSlice.themeColors;
export const selectDefaultAlbumColors = (state: { themeSlice: { defaultAlbumColors: ThemeColors; }; }) => state.themeSlice.defaultAlbumColors;

export const {setThemeColors,changeThemeColors,changeFontColors} = themeSlice.actions;
export default themeSlice.reducer;