// create asyncThunk to grab Spofity data and format it
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GenericObject } from "../types";

interface fetchTopTracksType{
    timeRange?:string;
    numOfTracks?:number;
}

interface SpofityState {
    isLoggedIn:boolean;
    isLoading:boolean;
    tracks:GenericObject[];
}

const fetchTopTracks = createAsyncThunk(
    'spotifyAPI/fetchTopTracks',
    async ({timeRange = 'medium_term',numOfTracks = 20}:fetchTopTracksType) => {
        const tracks:GenericObject[] = []; 
        const accessToken:any = window.location.href.match(/access_token=([^&]*)/); 
        
        const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${numOfTracks}`, {
            headers: {
                Authorization: `Bearer ${accessToken[1]}`,
            },
        })

        const tracksResponse = await response.json();
        // tracksResponse.items.forEach((track:GenericObject) => {
        //     tracks.push({name:track.name,})
        // });
        for (let i = 0; i< tracksResponse.items.length; i++) {
            const track = tracksResponse.items[i];

            const response = await fetch(`https://api.spotify.com/v1/audio-features/${track.id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken[1]}`,
                },
            })
            const trackResponse = await response.json();
            tracks.push({
                name:track.name,
                acousticness:Math.round(trackResponse.acousticness * 100),
                danceability:Math.round(trackResponse.danceability * 100),
                energy:Math.round(trackResponse.energy * 100),
                loudness:Math.round((trackResponse.loudness + 60) * (100/60)),
                valence:Math.round(trackResponse.valence * 100),
            })
        }
        return tracks;
    }
)

const initialState = {
    isLoggedIn:false,
    isLoading:false,
    tracks:[],
} as SpofityState;

const spotifySlice = createSlice({
    name:'spotifyAPI',
    initialState,
    reducers:{
        setIsLoggedIn(state,action) {
            state.isLoggedIn = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopTracks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tracks = [...action.payload];
            })
            .addCase(fetchTopTracks.pending, (state,action) => {
                state.isLoading = true;
            })
    }
})
// async thunk exports
export {fetchTopTracks};

// states
export const selectIsLoggedIn = (state: { spotifyAPI: { isLoggedIn: boolean; }; }) => state.spotifyAPI.isLoggedIn; 
export const selectLoading = (state: { spotifyAPI: { isLoading: boolean; }; }) => state.spotifyAPI.isLoading;
export const selectTracks = (state: { spotifyAPI: { tracks: GenericObject[]; }; }) => state.spotifyAPI.tracks;

export const {setIsLoggedIn} = spotifySlice.actions;
export default spotifySlice.reducer;