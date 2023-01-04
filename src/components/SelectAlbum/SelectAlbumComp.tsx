import { Grid, IconButton } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from "react-redux";
import { selectCurrentAlbum, selectTracks } from "../../slices/spotifySlice";

interface props {
    handleNextClick: () => void
    handlePrevClick: () => void
}

const SelectAlbumComp = ({handleNextClick,handlePrevClick}:props) => {

   const tracks = useSelector(selectTracks);
   const curretAlbum = useSelector(selectCurrentAlbum);

    return(
        <Grid container spacing={2}>
            <Grid item xs={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <IconButton 
                    color="primary" 
                    aria-label="previos"
                    onClick={handlePrevClick}
                    disabled={curretAlbum === 0 ? true : false}
                >
                    <ArrowLeftIcon fontSize="large"/>
                </IconButton>
            </Grid>
            <Grid item xs={8}>
                <img 
                    src={tracks[curretAlbum].albumImage} 
                    alt=""
                    className="img-fluid"
                />
            </Grid>
            <Grid item xs={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <IconButton 
                    color="primary" 
                    aria-label="next"
                    onClick={handleNextClick}
                    disabled={curretAlbum === tracks.length-1 ? true : false} 
                >
                    <ArrowRightIcon fontSize="large"/>
                </IconButton>
            </Grid>
        </Grid>
    );
}

export default SelectAlbumComp;