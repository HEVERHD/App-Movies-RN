
import React,{useContext} from 'react'
import { StyleSheet, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { GradientContext } from '../context/GradientContext';
import { color } from 'react-native-reanimated';


interface Props {
    children: JSX.Element | JSX.Element[]
}

export default function Gradient({children}: Props) {

  const {colors} = useContext(GradientContext)



  return (
   <View style = {{flex:1}}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, "#b8b8b8"]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y:0.1}}
        end={{x: 0.5, y: 0.9}}

        />
        {children}
   </View>
  )
}