import LoginButtonComp from "./LoginButtonComp";


const LoginButton = () => {
    
    // const redirectURI: any = 'http://localhost:3000/';
    const redirectURI: any = 'https://song-profiler.netlify.app';

    let accessToken = "";


    const getAccessToken = async () => {
        // const clientId = getAPIKey();
        const response = await fetch('/.netlify/functions/accessAPIKey');
        const clientId = await response.json();
       
        

        if (accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            window.history.pushState("Access Token", "", "/");
            return accessToken;
        } else {
            const accessUrl: any = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=user-top-read&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
    }

    const handleClick = () => {
        getAccessToken();
    }


    return(
        <LoginButtonComp
            handleClick={handleClick}
        />
    );
}

export default LoginButton;