import React, { useContext } from 'react';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-reanimated-carousel';

import { useMovies } from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import HorizontalSlider from '../components/HorizontalSlider';
import Gradient from '../components/Gradient';
import { getCardColorsImg } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width: windowWidth } = Dimensions.get('window');

export default function HomeScreenPrueba() {
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    const { setMainColors } = useContext(GradientContext);

    const getCardColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] =
            await getCardColorsImg(uri);
        setMainColors({ primary, secondary });
    };
// funcion efecto para traer el color cuando carga la la APP
    useEffect(() => {
        if (nowPlaying.length > 0) {
            getCardColors(0);
        }
    }, [nowPlaying]);

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
        <Gradient>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/* height added to show shadowbox entirely  */}
                    <View style={{ height: 440 }}>
                        <Carousel
                            onSnapToItem={index => getCardColors(index)}
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
                            renderItem={({ item }) => (
                                <MovieCard movie={item} />
                            )}
                        />
                    </View>

                    {/* Peliculas Populares */}

                    <HorizontalSlider title="Populares" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Estrenos" movies={upcoming} />
                </View>
            </ScrollView>
        </Gradient>
    );
}
