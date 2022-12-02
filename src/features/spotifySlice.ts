// create asyncThunk to grab Spofity data and format it
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


interface tracks{
    name:string;
}

const fetchTopTracks = createAsyncThunk(
    'spotifyAPI/fetchTopTracks',
    async () => {
        // const accessToken = getAccessToken();
        const accessToken:any = window.location.href.match(/access_token=([^&]*)/); 
        
        const response = await fetch(`https://api.spotify.com/v1/me/top/tracks`, {
            headers: {
                Authorization: `Bearer ${accessToken[1]}`,
            },
        })
        const tracks = await response.json();
        const trackNames:string[] = []; 
        tracks.items.forEach((track:tracks) => trackNames.push(track.name));
        console.log(trackNames);
        return trackNames;
    }
)

interface SpofityState {
    isLoggedIn:boolean;
    tracks:any[];
    accessToken:string;
}

const initialState = {
    isLoggedIn:false,
    tracks:[],
    accessToken:"",
} as SpofityState;

const spotifySlice = createSlice({
    name:'spotifyAPI',
    initialState,
    reducers:{
        setIsLoggedIn(state,action) {
            state.isLoggedIn = action.payload;
        },
        setAccessToken(state,action) {
            state.accessToken = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopTracks.fulfilled, (state, action) => {
                state.tracks = [...action.payload];
            })
    }
})
export {fetchTopTracks};

export const selectIsLoggedIn = (state: { spotifyAPI: { isLoggedIn: boolean; }; }) => state.spotifyAPI.isLoggedIn;
export const selectAccessToken = (state: { spotifyAPI: { AccessToken: string; }; }) => state.spotifyAPI.AccessToken; 

export const {setIsLoggedIn, setAccessToken} = spotifySlice.actions;
export default spotifySlice.reducer;