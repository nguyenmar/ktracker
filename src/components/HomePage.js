import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';

const MediaCard = ({ media, addDramaToCookie }) => {
  const handleAddDrama = () => {
    addDramaToCookie(media);
  };

    return (
        <Card sx={{ maxWidth: 500}}>

        <CardMedia
          component="img"
          sx={{ height: 750 }}
          image={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
          alt={media.title || media.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {media.title || media.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {media.original_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {media.first_air_date}
          </Typography>
          <Button onClick={handleAddDrama}>
            Add to Watchlist
          </Button>
        </CardContent>
      </Card>
    );
  };

  const HomePage = ({ media, addDramaToCookie }) => {
    return (
      <div>
        <h2>Popular TV Shows</h2>
        <Grid container spacing={2}>
          {media.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <MediaCard media={item} addDramaToCookie={addDramaToCookie} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default HomePage;