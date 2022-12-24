import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    themeColors:string[];
}

const initialState = {
    themeColors:[],
} as ThemeState;

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        setThemeColors(state,action) {
            state.themeColors = action.payload;
        }
    }
});


export const selectThemeColors = (state: { themeSlice: { themeColors: string[]; }; }) => state.themeSlice.themeColors;

export const {setThemeColors} = themeSlice.actions;
export default themeSlice.reducer;