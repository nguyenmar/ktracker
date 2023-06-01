import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Grid, Card, CardContent, Typography } from '@mui/material';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DayTab = ({ day }) => {
  return (
    <div>
      <Typography variant="h6" component="div" gutterBottom>
        {day}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Content for {day}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more Grid items for additional cards */}
      </Grid>
    </div>
  );
};

const Dramas = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const date = new Date();
    const currentDay = date.getDay(); // Get the current day of the week (0-6)
    setActiveTab(currentDay);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        {daysOfWeek.map((day, index) => (
          <Tab key={index} label={day} />
        ))}
      </Tabs>
      <DayTab day={daysOfWeek[activeTab]} />
    </div>
  );
};

export default Dramas;
