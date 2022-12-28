import React from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';

import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export default function HomeScreenPrueba() {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

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
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* height added to show shadowbox entirely  */}
                <View style={{ height: 440 }}>
                    <Carousel
                        mode="parallax"
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
                        data={nowPlaying}
                        renderItem={({ item }) => <MovieCard movie={item} />}
                    />
                </View>

                {/* Peliculas Populares */}

                <HorizontalSlider title="Populares" movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />
                <HorizontalSlider title="Estrenos" movies={upcoming} />
            </View>
        </ScrollView>
    );
}
