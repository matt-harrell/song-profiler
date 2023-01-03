import { Grid, IconButton } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from "react-redux";
import { selectAlbumURL } from "../../slices/spotifySlice";

const SelectAlbumComp = () => {

    const albumURL = useSelector(selectAlbumURL);

    return(
        <Grid container spacing={2}>
            <Grid item xs={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <IconButton color="primary" aria-label="previos">
                    <ArrowLeftIcon fontSize="large"/>
                </IconButton>
            </Grid>
            <Grid item xs={8}>
                <img 
                    src={albumURL} 
                    alt=""
                    className="img-fluid"
                />
            </Grid>
            <Grid item xs={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <IconButton 
                    color="primary" 
                    aria-label="next" 
                >
                    <ArrowRightIcon fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default SelectAlbumComp;