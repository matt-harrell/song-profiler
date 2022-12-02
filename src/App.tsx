import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppDispatch } from './app/store';
import LoginButton from './components/LoginButton/LoginButton';
import { fetchTopTracks, selectIsLoggedIn, setIsLoggedIn } from './features/spotifySlice';

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const accessToken = window.location.href.match(/access_token=([^&]*)/); 
    if(accessToken){
      dispatch(setIsLoggedIn(true))
      dispatch(fetchTopTracks())
    }
    
  },[dispatch]);

  return (
    <div className="App">
     {isLoggedIn ? 'logged in' : <LoginButton/>}
    </div>
  );
}

export default App;
