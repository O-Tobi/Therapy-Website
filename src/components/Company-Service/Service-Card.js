import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';




function ServiceCard(props) {
  return (
    <Card
    sx={{
      
      maxWidth: 300, 
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
      <CardContent sx={{ textAlign:'center'}}>
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
    <CardActions> {/* you can use margin top and width of 100% here */}
      <Button 
      variant='contained' 
      color="primary"
      fullWidth
      endIcon={<ArrowRightAltIcon/>}
      sx={{
        letterSpacing: '.3rem',
        fontSize: '.5rem'
      }}
      >
        Learn more
      </Button>
    </CardActions>
  </Card>
  
  );
}

export default ServiceCard;