import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'eb42fd1735381027e43257fb869cd9ad',
        language: 'es-ES',
    },
});

export default movieDB;
