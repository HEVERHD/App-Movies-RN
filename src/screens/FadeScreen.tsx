import { View, Animated, Button } from 'react-native'
import React, { useRef } from 'react'


export default function FadeScreen() {

  const opacity = useRef( new Animated.Value(0)).current

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 1 seconds
    Animated.timing(
      opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver:true
      
    }
    
    ).start();
  };


  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver:true
    }).start();
  };


  return (
    <View style={{
        flex:1,
         backgroundColor:"grey",
         justifyContent:"center",
         alignItems:"center"
         }}>
            <Animated.View style={{
                backgroundColor:"#084F6A",
                width:150,
                height:150,
                borderColor:"white",
                borderWidth:10,
                marginBottom:10,
                opacity: opacity
              }}

              
              />

              <Button
                title = "fadeIn"
                onPress={fadeIn}
              
              />

              <Button
                title = "fadeOut"
                onPress={fadeOut}
              
              />
      
     
    </View>
  )
}