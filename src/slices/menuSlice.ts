import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
    open:boolean,
    showAlbum:boolean,
    albumAnimationDuration:number,
    isPrevDisabled:boolean,
    isNextDisabled:boolean,
}

const initialState = {
    open:false,
    showAlbum:true,
    albumAnimationDuration:300,
    isPrevDisabled:true,
    isNextDisabled:false,
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
        },
        setPrevDisabled(state,action:PayloadAction<boolean>){
            state.isPrevDisabled = action.payload;
        },
        setNextDisabled(state,action:PayloadAction<boolean>){
            state.isNextDisabled = action.payload;
        },

    }
})

export const selectMenuOpen = (state: { menu: { open: boolean; }; }) => state.menu.open;
export const selectShowAlbum = (state: { menu: { showAlbum: boolean; }; }) => state.menu.showAlbum;
export const selectAlbumAnimationDuration = (state: { menu: { albumAnimationDuration: number; }; }) => state.menu.albumAnimationDuration;
export const selectIsPrevDisabled = (state: { menu: { isPrevDisabled: boolean; }; }) => state.menu.isPrevDisabled;
export const selectIsNextDisabled = (state: { menu: { isNextDisabled: boolean; }; }) => state.menu.isNextDisabled;

export const {toggleMenu,setShowAlbum,setPrevDisabled,setNextDisabled} = menuSlice.actions;

export default menuSlice.reducer;