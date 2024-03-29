import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppDispatch } from './app/store';
import ThemeComp from './components/ThemeComp';
import LoggedInScreen from './components/LoggedInScreen';
import MenuBar from './components/MenuBar/MenuBar';
import { fetchTopTracks, selectIsLoggedIn, setIsLoggedIn,selectLoading } from './slices/spotifySlice';
import { selectThemeColors } from './slices/ThemeSlice';
import Drawer from './components/Drawer/Drawer';
import InfoDrawer from './components/InfoDrawer/InfoDrawer';
import LoggedOutScreen from './components/LoggedOutScreen';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const themeColors = useSelector(selectThemeColors);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    const accessToken = window.location.href.match(/access_token=([^&]*)/); 
    if(accessToken){
      dispatch(setIsLoggedIn(true))
      dispatch(fetchTopTracks({}))
    }
    
  },[dispatch]);

  return (
    <ThemeComp>
      <div className="App" style={{ backgroundColor: `${isLoading ? '#191414' : themeColors.backgroundColor.color}` }}>
        <MenuBar/>
        <Drawer/>
        <InfoDrawer/>
        {isLoggedIn ? <LoggedInScreen /> : <LoggedOutScreen/>}
      </div>
    </ThemeComp>
  );
}

export default App;
