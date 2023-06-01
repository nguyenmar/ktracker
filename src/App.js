import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Dramas from "./components/Dramas"
import Watching from "./components/Watching"
import SearchResults from "./components/SearchResults"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { discoverMedia, searchMedia } from './api';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['watchingDramas']);
  const [watchingDramas, setWatchingDramas] = useState(cookies['watchingDramas'] || []);
  const [media, setMedia] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchQuery) => {
    try {
      console.log("trying to search")
      const results = await searchMedia(searchQuery);
      setSearchResults(results);
      console.log(results);
    } catch (error) {
      console.error('Error searching shows:', error);
    }
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const mediaData = await discoverMedia();
        setMedia(mediaData);
      } catch (error) {
        // Handle error
      }
    };

    fetchMedia();
  }, []);

  const addDramaToCookie = (drama) => {
    if (!watchingDramas.includes(drama)) {
      const updatedDramas = [...watchingDramas, drama];
      setWatchingDramas(updatedDramas);
      setCookie('watchingDramas', updatedDramas, { path: '/' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage media={media} addDramaToCookie={addDramaToCookie} />} />
          {/* <Route path="/dramas" element={<Dramas />} /> */}
          <Route path="/watchlist" element={<Watching />} />
          <Route path="/search" element={<SearchResults results={searchResults} addDramaToCookie={addDramaToCookie} />}/>
        </Routes>
        {/* <button onClick={clearCookies}>Clear Cookies</button> */}
      </div>
    </Router>
  );
}

export default App;
