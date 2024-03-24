import './CallToAction.css'
import { Box } from '@mui/material';

function CallToAction () {
    return (
        
        <Box sx={{
            color: 'white',
            px: '1rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor: 'green',
            textAlign: 'center',
        }}>
            <p>Visit us today! Located in Charlotte, NC & Salisbury, NC</p>
        </Box>
        
    )
};

export default CallToAction;