import { Grid, IconButton, Grow, Typography } from "@mui/material";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from "react-redux";
import { selectAlbumAnimationDuration, selectIsNextDisabled, selectIsPrevDisabled, selectShowAlbum } from "../../slices/menuSlice";
import { GenericObject } from "../../types";

interface props {
    tracks:GenericObject[],
    curretAlbum:number,
    handleNextClick: () => void,
    handlePrevClick: () => void,
}

const SelectAlbumComp = ({curretAlbum,tracks,handleNextClick,handlePrevClick}:props) => {

//    const tracks = useSelector(selectTracks);
//    const curretAlbum = useSelector(selectCurrentAlbum);
    const isNextDisabled = useSelector(selectIsNextDisabled);
    const isPrevDisabled = useSelector(selectIsPrevDisabled);
    const duration = useSelector(selectAlbumAnimationDuration);
    const showAlbum = useSelector(selectShowAlbum);

    return(
        <Grid container spacing={2}>
            <Grid item xs={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <IconButton 
                    color="primary" 
                    aria-label="previos"
                    onClick={handlePrevClick}
                    disabled={isPrevDisabled}
                >
                    <ArrowLeftIcon fontSize="large"/>
                </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Grow in={showAlbum} timeout={duration}>
                    <img 
                        src={tracks[curretAlbum].albumImage} 
                        alt=""
                        className="img-fluid"
                    />
                </Grow>
                
            </Grid>
            <Grid item xs={2} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <IconButton 
                    color="primary" 
                    aria-label="next"
                    onClick={handleNextClick}
                    disabled={isNextDisabled} 
                >
                    <ArrowRightIcon fontSize="large"/>
                </IconButton>
            </Grid>
            <Grid item xs={12} sx={{textAlign:'center'}}>
                <Typography>{tracks[curretAlbum].albumName}</Typography>
                <Typography sx={{fontStyle:'italic'}}>{tracks[curretAlbum].artistsNames}</Typography>
            </Grid>
        </Grid>
    );
}

export default SelectAlbumComp;