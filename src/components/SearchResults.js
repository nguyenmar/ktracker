import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button} from '@mui/material';

const SearchResults = ({ results, addDramaToCookie}) => {
    const handleAddToWatching = (item) => {
        addDramaToCookie(item);
      };

  return (
    <div>
      <h2>Search Results</h2>
      <Grid container spacing={2}>
        {results.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title || item.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.original_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.first_air_date}
                </Typography>
                <Button onClick={handleAddToWatching(item)}>
                    Add to Watchlist
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SearchResults;
