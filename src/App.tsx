import getAccessToken from './API/spotifyAPI';
import './App.css';

function App() {


  const spotifyTest = async () => {
    const accessToken = getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/me/top/tracks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
     const data = await response.json();
     console.log(data);
     
  }

  

  return (
    <div className="App">
      <button onClick={spotifyTest}>Get User Data</button>
      
    </div>
  );
}

export default App;
