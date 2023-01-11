import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
    open:boolean,
    showAlbum:boolean,
    albumAnimationDuration:number,
}

const initialState = {
    open:false,
    showAlbum:true,
    albumAnimationDuration:300,
} as MenuState;

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        toggleMenu(state,action){
            state.open = action.payload;
        },
        setShowAlbum(state,action){
            state.showAlbum = action.payload;
        }
    }
})

export const selectMenuOpen = (state: { menu: { open: boolean; }; }) => state.menu.open;
export const selectShowAlbum = (state: { menu: { showAlbum: boolean; }; }) => state.menu.showAlbum;
export const selectAlbumAnimationDuration = (state: { menu: { albumAnimationDuration: number; }; }) => state.menu.albumAnimationDuration;

export const {toggleMenu,setShowAlbum} = menuSlice.actions;

export default menuSlice.reducer;