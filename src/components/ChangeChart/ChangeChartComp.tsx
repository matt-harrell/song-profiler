import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import BarChartIcon from '@mui/icons-material/BarChart';
import RadarIcon from '@mui/icons-material/Radar';

interface props{
    showRadarChart:boolean;
    handleShowRadarChart:(event:React.MouseEvent<HTMLElement>,chart:string) => void;
}

const ChangeChartComp = ({showRadarChart,handleShowRadarChart}:props) => {
    
    return (
        <Box  sx={{textAlign:'center' }}>
            <ToggleButtonGroup
                value={showRadarChart ? 'radar' : 'bar'}
                exclusive
                onChange={handleShowRadarChart}
                aria-label="show radar chart"
            >
                <ToggleButton value="bar" aria-label="show bar chart">
                    <BarChartIcon />
                </ToggleButton>
                <ToggleButton value="radar" aria-label="show radar chart">
                    <RadarIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
}

export default ChangeChartComp;