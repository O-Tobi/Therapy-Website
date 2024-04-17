import { Box, Typography } from "@mui/material";


/* this is the overlay */
function GuideSteps ({number, step, stepDetails}) {
    return (
        <Box
        sx={{
          backgroundColor: 'yellow',
          width: '80%',
          height: '40%',
          margin: '-100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          
        }}>
          <Box
          sx = {{
            backgroundColor: 'red',
            height: '90%',
            width: '95%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
            
          }}>

            <Box
            sx={{
              backgroundColor: 'blue',
              height: '100%',
              width: '25%',
              padding: '10px',
            }}>
              <Box sx={{ height: '100%', width: '100%', alignContent : 'center', backgroundColor: 'green' }}>
                <Box
                sx={{
                  height: '30%',
                  width: '100%',
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'left',
                  backgroundColor: 'purple',
                  marginY: '20px',
                }}>
                  <Typography variant='h1'>{number}</Typography>
                  <Typography variant='h3'>{step}</Typography>
                </Box>
                <Typography variant='body1'>{stepDetails}</Typography>
              </Box>
            </Box>
 
          </Box>
          
        </Box>

    )
};

export default GuideSteps;