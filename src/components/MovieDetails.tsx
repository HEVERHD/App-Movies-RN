import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { MovieFull } from '../interfaces/movieinterfaces';
import { Cast } from '../interfaces/creditsInterface';
import ActorItem from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export default function MovieDetails({ movieFull, cast }: Props) {
    // const {} = useMovieDetails(movieId: number)

    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent:"center" }}>
                    <Icon name="star-outline" color="purple" size={16} />
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
                {/* Historia */}
                <Text
                    style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>

                {/* Presupuesto */}
                <Text
                    style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>

                <Text style={{ fontSize: 16 }}>
                    {movieFull.budget.toLocaleString('en', {
                        style: 'currency',
                        currency: 'USD',
                    })}
                </Text>
            </View>
            {/* Casting */}
                    <View style={{marginTop:10, marginBottom:100}}>
                         <Text
                          style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal:20, }}>
                          Actores
                         </Text>

                         <FlatList
                            data={cast}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item})=>  <ActorItem actor={ item } /> }
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{marginTop:10, height:70}}
                         
                         />
                   
                    </View>
        </>
    );
}
