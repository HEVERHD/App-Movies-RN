import { useState, useEffect } from 'react';
import { MovieFull } from '../interfaces/movieinterfaces';
import movieDB from '../api/movieDB';
import { Cast, CredistResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export default function useMovieDetails(movieId: number) {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast:[],
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CredistResponse>(`/${movieId}/credits`);

        const [movieDetailsResp, casPromiseResp] = await Promise.all([
            movieDetailsPromise,
            castPromise,
        ]);

        setState({
            isLoading:false,
            movieFull:movieDetailsResp.data,
            cast: casPromiseResp.data.cast,
        })
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
    ...state   
    };
}
