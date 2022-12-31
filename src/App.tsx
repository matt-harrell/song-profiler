import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppDispatch } from './app/store';
import ThemeComp from './app/ThemeComp';
import LoggedInScreen from './components/LoggedInScreen';
import LoginButton from './components/LoginButton/LoginButton';
import { fetchTopTracks, selectIsLoggedIn, setIsLoggedIn,selectLoading } from './features/spotifySlice';
import { selectThemeColors } from './features/ThemeSlice';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const themeColors = useSelector(selectThemeColors);
  const isLoading = useSelector(selectLoading)

  useEffect(() => {
    const accessToken = window.location.href.match(/access_token=([^&]*)/); 
    if(accessToken){
      dispatch(setIsLoggedIn(true))
      dispatch(fetchTopTracks({}))
    }
    
  },[dispatch]);

  return (
    <ThemeComp>
      <div className="App" style={{ backgroundColor: `${isLoading ? 'white' : themeColors.backgroundColor.color}` }}>
        {isLoggedIn ? <LoggedInScreen /> : <LoginButton />}
      </div>
    </ThemeComp>
  );
}

export default App;
