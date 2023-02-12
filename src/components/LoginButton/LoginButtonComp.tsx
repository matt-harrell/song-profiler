import Button from "@mui/material/Button";

interface LoginButtonCompProps {
    handleClick:() => void;
}

const LoginButtonComp = ({handleClick}:LoginButtonCompProps) => {
    return(
        <Button variant="contained" disableElevation onClick={handleClick} sx={{marginTop:2}}>
            Login
        </Button>
    );
}

export default LoginButtonComp;