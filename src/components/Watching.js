import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Card, CardMedia, CardContent, Typography, Grid, Button} from '@mui/material';


const Watching = () => {
  const [cookies, setCookie] = useCookies(['watchingDramas']);
  const [watchingDramas, setWatchingDramas] = useState([]);
  // const currentDate = new Date();

  // const getStatus = (firstAirDate) => {
  //   const airDate = new Date(firstAirDate);
  //   if (airDate > currentDate) {
  //     return 'Yet to Air';
  //   } else if (airDate <= currentDate) {
  //     return 'Currently Airing';
  //   } else {
  //     return 'Unknown';
  //   }
  // };

  useEffect(() => {
    // Retrieve the previously saved dramas from cookies
    const savedDramas = cookies['watchingDramas'];
    if (savedDramas) {
      setWatchingDramas(savedDramas);
    }
  }, []);

  useEffect(() => {
    // Save the updated dramas to cookies whenever the state changes
    setCookie('watchingDramas', watchingDramas, { path: '/' });
  }, [watchingDramas, setCookie]);

  const handleDeleteDrama = (dramaId) => {
    const updatedDramas = watchingDramas.filter((drama) => drama.id !== dramaId);
    setCookie('watchingDramas', updatedDramas);
    window.location.reload();
  };


  console.log(watchingDramas)
  return (
    
    <div>
      <h2>Watching Dramas</h2>
      <Grid container spacing={2}>
        {watchingDramas.map((item) => (
          
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
              component="img"
              sx={{ height: 750 }}
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
                {/* <Typography variant="subtitle2">Status: {getStatus(item.first_air_date)}</Typography> */}
                <Button onClick={() => handleDeleteDrama(item.id)}>Remove</Button>

              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
    // <div>
    //   <h2>Currently Watching Dramas</h2>
    //   <ul>
    //     {watchingDramas.map((drama, index) => (
    //       <li key={index}>{drama}</li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Watching;
