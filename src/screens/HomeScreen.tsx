import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';

import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';

const { width: windowWidth } = Dimensions.get('window');

export default function HomeScreen() {
    const { peliculasEnCine, isLoading } = useMovies();

    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size={200} color="purple" />
            </View>
        );
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            {/* CAROUSE PRINCIPAL  */}
            <View style={{ height: 440 }}>
                <Carousel
                    mode="parallax"
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        width: windowWidth,
                        justifyContent: 'center',
                    }}
                    pagingEnabled={false}
                    windowSize={2}
                    snapEnabled
                    width={300}
                    height={420}
                    modeConfig={{
                        parallaxScrollingScale: 0.9,

                        parallaxScrollingOffset: 40,

                        parallaxAdjacentItemScale: 0.75,
                    }}
                    data={peliculasEnCine}
                    renderItem={({ item }) => <MovieCard movie={item} />}
                />
            </View>

                    {/* Peliculas Populares */}
                    <View style={{backgroundColor:"red", height:230}} />

        </View>
    );
}
