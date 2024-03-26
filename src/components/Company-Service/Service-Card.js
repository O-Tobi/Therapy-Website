
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';





  function ServiceCard(props) {
    return (
      <Card
        sx={{
          height: 380,
          maxWidth: 300,
          borderRadius: 3,
          marginBottom: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)',
          transition: 'transform 0.3s ease', // Add transition for smooth animation
          '&:hover': {
          transform: 'scale(1.05)', // Increase scale on hover
        }
        }}
      >
        <CardActionArea sx={{ flexGrow: 1 }}>
          <CardMedia
            component="img"
            height="180"
            image={props.cardImg}
            alt={props.cardAlt}
          />
          <CardContent sx={{ textAlign: 'center', height: 140 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
              {props.cardTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {props.cardText}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          endIcon={<ArrowRightAltIcon />}
          sx={{
            letterSpacing: '.3rem',
            fontSize: '.5rem',
            backgroundColor: props.buttonColor,
          }}
        >
          Learn more
        </Button>
      </Card>
    );
  }
  

export default ServiceCard;