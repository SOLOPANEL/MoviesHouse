//const API_KEY = "467da941731702ab2141474cc7f6f2db";

const API_KEY = "9776bc553b75f1319e41283efc671aa9";
const BASE_URL = "https://api.themoviedb.org/3";



export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    
    const data = await response.json();
    return data.results;
};



export const searchMovies = async (query) => {
    const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);

    const data = await response.json();
    return data.results;
};