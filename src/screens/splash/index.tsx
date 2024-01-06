import {View, Text, Image, Animated} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation<any>();
  // Animated values
  const flyAnim = useRef(new Animated.Value(0)).current; // Initial position

  useEffect(() => {
    // Starting the animation after the component mounts
    Animated.timing(flyAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, [flyAnim]);

  // Interpolating values for movement and opacity
  const flyUp = flyAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -500], // adjust the range as needed
  });
  const rotate = flyAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['270deg', '270deg'],
  });
  const fadeOut = flyAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0], // fade out the image
  });

  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Animated.Image
        source={require('../../assets/icon.png')}
        className="h-[80px] w-[80px]"
        style={[
          {
            opacity: fadeOut,
            transform: [{translateY: flyUp}, {rotate: rotate}],
          },
        ]}
      />
      <Text className="text-white text-[36px] font-bold">Book Flight</Text>
    </View>
  );
};

export default Splash;
