import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GenericObject } from "../../types";

interface CategoryAccordionCompProps  {
    expanded:string | boolean,
    themeColors:GenericObject;
    handleChange:(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void,
}


const CategoryAccordionComp = ({themeColors,expanded,handleChange}:CategoryAccordionCompProps) => {
    return(
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:themeColors.colorOne.fontColor}}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    color={themeColors.colorOne.fontColor}
                >
                    <Typography color={themeColors.colorOne.fontColor}>Acousticness</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A confidence measure from 0  to 100 of whether the track is acoustic. 100 represents high confidence the track is acoustic.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:themeColors.colorOne.fontColor}}/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography color={themeColors.colorOne.fontColor}>Danceability</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:themeColors.colorOne.fontColor}}/>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography color={themeColors.colorOne.fontColor}>Energy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Energy is a measure from 0 to 100 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:themeColors.colorOne.fontColor}}/>}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography color={themeColors.colorOne.fontColor}>Loudness</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The overall loudness of a track. Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). The louder the track the higher the value up to 100.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color:themeColors.colorOne.fontColor}}/>}
                    aria-controls="panel5a-content"
                    id="panel5a-header"
                >
                    <Typography color={themeColors.colorOne.fontColor}>Valence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        A measure from 0 to 100 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default CategoryAccordionComp;