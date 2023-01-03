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
    albumURLs:string[],
    albumURL:string;
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
            const makeShortName = () => {
                if(track.name.length > 20){
                     const shortTitle = track.name.slice(0,20);
                     return shortTitle.trim() + '...';
                } else{
                    return track.name;
                }
            }
            
            const response = await fetch(`https://api.spotify.com/v1/audio-features/${track.id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken[1]}`,
                },
            })
            const trackResponse = await response.json();
            
            
            tracks.push({
                name:track.name,
                id:track.id,
                artistsNames:track.artists.map((artist:GenericObject) => artist.name).join(", "),
                shortName:makeShortName(),
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

const fetchTopAlbum = createAsyncThunk(
    'spotifyAPI/fetchTopAlbum',
   async (id:string) => {
    const accessToken:any = window.location.href.match(/access_token=([^&]*)/);
    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken[1]}`,
            },
        })

        const track = await response.json();
        return track.album.images[1].url;
   }
)

const initialState = {
    isLoggedIn:false,
    isLoading:false,
    tracks:[],
    albumURLs:[],
    albumURL:'',
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
                state.tracks = [...action.payload];
            })
            .addCase(fetchTopTracks.pending, (state,action) => {
                state.isLoading = true;
            })
            .addCase(fetchTopAlbum.fulfilled,(state,action) => {
                state.isLoading = false;
                state.albumURL = action.payload;
            })
            
    }
})
// async thunk exports
export {fetchTopTracks,fetchTopAlbum};

// states
export const selectIsLoggedIn = (state: { spotifyAPI: { isLoggedIn: boolean; }; }) => state.spotifyAPI.isLoggedIn; 
export const selectLoading = (state: { spotifyAPI: { isLoading: boolean; }; }) => state.spotifyAPI.isLoading;
export const selectTracks = (state: { spotifyAPI: { tracks: GenericObject[]; }; }) => state.spotifyAPI.tracks;
export const selectAlbumURL = (state: { spotifyAPI: { albumURL: string; }; }) => state.spotifyAPI.albumURL;

export const {setIsLoggedIn} = spotifySlice.actions;
export default spotifySlice.reducer;