import Button from "@mui/material/Button";

interface LoginButtonCompProps {
    handleClick:() => void;
}

const LoginButtonComp = ({handleClick}:LoginButtonCompProps) => {
    return(
        <Button variant="contained" disableElevation>
            Disable elevation
        </Button>
    );
}

export default LoginButtonComp;