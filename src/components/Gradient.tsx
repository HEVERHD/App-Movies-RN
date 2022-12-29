
import React,{useContext, useEffect} from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';


interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function Gradient({children}: Props) {

  const {colors, prevColors, setMainPrevColors} = useContext(GradientContext)

  const {fadeIn, fadeOut ,opacity} = useFade()



  useEffect(() => {
    fadeIn( ()=>{
      setMainPrevColors( colors );
      fadeOut(0);
    } )
  }, [colors])


  return (
   <View style = {{flex:1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, "#b8b8b8"]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y:0.1}}
        end={{x: 0.5, y: 0.9}}

        />

        <Animated.View
            style={{
              
              ...StyleSheet.absoluteFillObject,
              opacity
            
            }}
        
        >

        <LinearGradient
        colors={[colors.primary, colors.secondary, "#b8b8b8"]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y:0.1}}
        end={{x: 0.5, y: 0.9}}
      
        />
       
        </Animated.View>
        {children}
   </View>
  )
}