import {getAccessToken,accessToken} from './API/spotifyAPI';
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

  if(accessToken !== ""){
    console.log('logged in, accesstoken equals ' + accessToken)
  }else {
    console.log('NOT logged in' + accessToken + "<==");
    
  }

  

  return (
    <div className="App">
     {/* if user is logged in then show bar chart if not show logged in button*/}
      <button onClick={spotifyTest}>login</button>
    </div>
  );
}

export default App;
