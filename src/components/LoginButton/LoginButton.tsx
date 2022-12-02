import LoginButtonComp from "./LoginButtonComp";

const LoginButton = () => {

    const handleClick = () => {
        // dispatch to redux store 
        // redux store handles spotify API call
    }


    return(
        <LoginButtonComp
            handleClick={handleClick}
        />
    );
}

export default LoginButton;