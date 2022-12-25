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
}

const initialState = {
    themeColors:themeColors,
} as ThemeState;

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        setThemeColors(state,action) {
            const keys = Object.keys(state.themeColors);
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                state.themeColors[key as keyof typeof state.themeColors].color = action.payload[i]   
            }
            
        }
    }
});


export const selectThemeColors = (state: { themeSlice: { themeColors: ThemeColors; }; }) => state.themeSlice.themeColors;

export const {setThemeColors} = themeSlice.actions;
export default themeSlice.reducer;