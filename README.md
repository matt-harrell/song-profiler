# [Song Profiler](https://song-profiler.netlify.app/)

## Overview
This app will show the users top songs and the Spotify audio profile for each song. This app uses 5 categories to show the audio profile for each song. The 5 categories are:

**Acousticness**: A confidence measure from 0  to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic.

**Danceability**: Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.

**Energy**: Energy is a measure from 0 to 100 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.

**Loudness**: The overall loudness of a track. Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). The louder the track the higher the value up to 100.

**Valence**: A measure from 0 to 100 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

*Category explanations are based on [spotify API docs](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-audio-features). Number values have been changed to represent values between 0 to 100. Converting the values to a scale of 0 to 100 makes it easier to compare data across the categories and songs.* 

The data from the songs and categories is displayed using a radar chart and bar graph.

## Features
- App will style itself based on the users top song album image
- User can change the album of which app styles itself with
- Users can change the colors of the app theme
- Users can change the whether to view their songs as a bar graph or radar chart
- Users can specify how many songs they want to compare
- Users can choose the time frame in which spotify pulls their top songs from. Their options are:
    - Past 4 weeks
    - Past 6 Months
    - Past Years


## Technologies Used
- [React](https://reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [Material UI](https://mui.com/)
- [D3](https://d3js.org/)
- [Spotify API](https://developer.spotify.com/documentation/web-api/)
- [Netlify](https://www.netlify.com/) 
- [React Colorful](https://www.npmjs.com/package/react-colorful)
- [Color.js](https://github.com/luukdv/color.js/)
