import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    open:boolean,
}

const initialState = {
    open:false,
} as MenuState;

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        toggleMenu(state,action){
            state.open = action.payload;
        }
    }
})

export const selectMenuOpen = (state: { menu: { open: boolean; }; }) => state.menu.open;

export const {toggleMenu} = menuSlice.actions;

export default menuSlice.reducer;