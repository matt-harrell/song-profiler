import { Box, Slider } from "@mui/material";

interface NumOfTrackSliderCompProps {
    handleChange:(event:Event,numOfTracksNum:number | number[]) => void;
    numOfTracks:number;
}

const NumOfTrackSliderComp = ({ handleChange, numOfTracks }: NumOfTrackSliderCompProps) => {
    return (
        <Box width={300}>
            <Slider
                defaultValue={20}
                aria-label="number of songs"
                valueLabelDisplay="auto"
                onChange={handleChange}
                value={numOfTracks}
                min={1}
                max={50}
            />
        </Box>
    );
}

export default NumOfTrackSliderComp;