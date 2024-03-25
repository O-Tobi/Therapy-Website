import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';



function ServiceCard(props) {
  return (
    <Card
    sx={{
      
      maxWidth: 345, 
      borderRadius: 3,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignSelf: 'normal',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        height="180"
        image={props.cardImg}
        alt={props.cardAlt}
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div"
          sx={{ 
            fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem' }, 
            fontWeight: 'bold',
          }}
        >
          {props.cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.cardText}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button 
      variant='contained' 
      color="primary"
      fullWidth
      >
        Share
      </Button>
    </CardActions>
  </Card>
  
  );
}

export default ServiceCard;