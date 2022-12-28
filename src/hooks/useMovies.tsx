import { useEffect, useState } from 'react';
import { Movie, MovieDBResponse } from '../interfaces/movieinterfaces';
import movieDB from '../api/movieDB';


interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setmoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });
  

    const getMovies = async () => {


       const nowPlayingPromise  =  movieDB.get<MovieDBResponse>('/now_playing', );
       const popular     = movieDB.get<MovieDBResponse>('/top_rated');
       const topRatedPromise    =  movieDB.get<MovieDBResponse>('/popular');
       const upcomingPromise    = movieDB.get<MovieDBResponse>('/upcoming');

        const resps = await Promise.all([nowPlayingPromise,popular, topRatedPromise, upcomingPromise ])

        setmoviesState({
            nowPlaying: resps[0].data.results,
            popular:resps[1].data.results,
            topRated:resps[2].data.results,
            upcoming:resps[3].data.results,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        //me traigo las peliculas actuales
        getMovies();
    }, []);

    return { ...moviesState,
         isLoading };
};
