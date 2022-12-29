import { View, Image, StyleSheet, Dimensions, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';


const screenHigth = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export default function DetailScreen({ route, navigation }: Props) {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;


    const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

    return (

        <ScrollView>

        <View style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.posterImage} />
        </View>

        <View style={styles.marginContainer}>
        <Text  style={styles.subTitle}> {movie.original_title}</Text>
        <Text style={styles.title}> {movie.title}</Text>

        </View>
        <View style={styles.marginContainer}>
      {
        isLoading ?  <ActivityIndicator size={30} color="purple" /> :
        <MovieDetails movieFull={movieFull!} cast={cast} />
      }
        </View>


        {/* BOTON PARA IR ATRAS */}
      <TouchableOpacity 
       style={styles.backButton}
       onPress={() => navigation.pop()}
       
       >

        <Icon
            name="chevron-back-outline"
            color="white"
            size={40}
           
        />

      </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHigth * 0.7,
        overflow:"hidden",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer:{
        marginTop:20,
    },
    subTitle:{
        textAlign:"center",
        fontSize:16,
        opacity:0.5
    },
    title:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
    },
    backButton:{
        
        position:"absolute",
        zIndex:999,
        elevation:9,
        top:30,
        left:7,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.5,
        shadowRadius: 9,
        paddingRight:15,
    }
});
