import { Box, Drawer, Typography } from "@mui/material";

interface MenuDrawerCompProps {
    open:boolean;
    handleClose:(value:boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const MenuDrawerComp = ({open,handleClose}:MenuDrawerCompProps) => {

    return(
        <Drawer
            anchor={'left'}
            open={open}
            onClose={handleClose(false)}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleClose(false)}
                onKeyDown={handleClose(false)}
            >
              <Typography>Text</Typography>
            </Box>

        </Drawer>
    ); 
}

export default MenuDrawerComp;