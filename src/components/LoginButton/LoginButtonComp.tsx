import Button from "@mui/material/Button";

interface LoginButtonCompProps {
    handleClick:() => void;
}

const LoginButtonComp = ({handleClick}:LoginButtonCompProps) => {
    return(
        <Button variant="contained" disableElevation onClick={handleClick}>
            Login
        </Button>
    );
}

export default LoginButtonComp;