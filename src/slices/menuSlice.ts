import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
    menuOpen:boolean,
    showAlbum:boolean,
    albumAnimationDuration:number,
    isPrevDisabled:boolean,
    isNextDisabled:boolean,
    isInfoDrawerOpen:boolean,
}

const initialState = {
    menuOpen:false,
    showAlbum:true,
    albumAnimationDuration:300,
    isPrevDisabled:true,
    isNextDisabled:false,
    isInfoDrawerOpen:false,
} as MenuState;

const menuSlice = createSlice({
    name:'menu',
    initialState,
    reducers:{
        toggleMenu(state,action){
            state.menuOpen = action.payload;
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
        toggleInfoDrawer(state,action:PayloadAction<boolean>){
            state.isInfoDrawerOpen = action.payload;
        }

    }
})

export const selectMenuOpen = (state: { menu: { menuOpen: boolean; }; }) => state.menu.menuOpen;
export const selectShowAlbum = (state: { menu: { showAlbum: boolean; }; }) => state.menu.showAlbum;
export const selectAlbumAnimationDuration = (state: { menu: { albumAnimationDuration: number; }; }) => state.menu.albumAnimationDuration;
export const selectIsPrevDisabled = (state: { menu: { isPrevDisabled: boolean; }; }) => state.menu.isPrevDisabled;
export const selectIsNextDisabled = (state: { menu: { isNextDisabled: boolean; }; }) => state.menu.isNextDisabled;
export const selectIsInfoDrawerOpen = (state: { menu: { isInfoDrawerOpen: boolean; }; }) => state.menu.isInfoDrawerOpen;

export const {toggleMenu,setShowAlbum,setPrevDisabled,setNextDisabled,toggleInfoDrawer} = menuSlice.actions;

export default menuSlice.reducer;