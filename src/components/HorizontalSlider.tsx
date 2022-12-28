import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieinterfaces';
import MovieCard from './MovieCard';

interface Props {
    title?: string;
    movies: Movie[];
}

export default function HorizontalSlider({ title, movies }: Props) {
    return(
        <View style={{ 
            // backgroundColor: 'red',
             height: ( title ) ? 260 : 220 
             
             
             }}>
            {title && (
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft:10 }}>{title}</Text>
            )}
    
            <FlatList
                data={movies}
                horizontal={true}
                renderItem={({ item }) => (
                    <MovieCard movie={item} width={140} height={200} />
                )}
            />
    </View>
    )
}
