import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const discoverMedia = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/tv`, {
      params: {
        api_key: API_KEY,
        sort_by: 'popularity.desc',
        with_original_language: 'ko', // Filter by Korean language (optional)
        include_adult: false,
        with_genres: "18" // Exclude adult content (optional)
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error discovering media:', error);
    throw error;
  }
};

export const searchMedia = async (searchQuery) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${searchQuery}`
    );
    console.log(response.data.results)
    const koreanShows = response.data.results.filter(
      (show) => show.original_language === 'ko' && show.genre_ids.includes(18)
    );

    return koreanShows;
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
};
