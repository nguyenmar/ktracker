import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, InputBase } from '@mui/material';
import { Link } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'



export default function Navbar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleSearchClick = () => {
    handleSearch(searchQuery);
    navigate('/search')
    setSearchQuery('');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow:1 }}>
          Korean Drama Tracker
        </Typography>
        <Link to={"/"}>
          <Button variant="text" color="inherit">Home</Button>
        </Link>
        {/* <Link to={"/dramas"}>
          <Button variant="text" color="inherit">Dramas</Button>
        </Link> */}
        <Link to={"/watchlist"}>
          <Button variant="text" color="inherit">Watchlist</Button>
        </Link>
        <div>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{ color: 'inherit' }}
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button
            variant="text"
            color="inherit"
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
