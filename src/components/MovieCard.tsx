import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Movie } from '../interfaces/movieinterfaces';
import { useNavigation } from '@react-navigation/native';



interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export default function MovieCard({ movie, height = 420, width = 300 }: Props) {
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={ () => navigation.navigate('DetailScreen' as never, movie as never) }
            style={{
                height,
                width,
                marginHorizontal: 1,
                paddingBottom:20,
                paddingHorizontal:10,
                // backgroundColor:"red"
            }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={styles.image} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        position:"absolute"
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.24,
        shadowRadius: 9,

        elevation: 10,
    },
});
