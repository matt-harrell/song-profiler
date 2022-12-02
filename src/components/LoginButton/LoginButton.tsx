import LoginButtonComp from "./LoginButtonComp";
import { cleintId } from '../../API/keys';


const LoginButton = () => {
    
    const redirectURI: any = 'http://localhost:3000/';

    let accessToken = "";

    const getAccessToken = () => {
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
            const accessUrl: any = `https://accounts.spotify.com/authorize?client_id=${cleintId}&response_type=token&scope=user-top-read&redirect_uri=${redirectURI}`;
            window.location = accessUrl;
        }
    }

    const handleClick = () => {
        // dispatch to redux store 
        // redux store handles spotify API call
        getAccessToken();
    }


    return(
        <LoginButtonComp
            handleClick={handleClick}
        />
    );
}

export default LoginButton;