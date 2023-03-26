import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
// Constants
import { kWidth } from '@/Common/Constants';
import { Layout } from '@/Theme';
// Components
import { LocalImage } from '@/Components/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '@/Theme/Variables';

const IntroScreen = () => {
  return (
    <View style={[Layout.fill]}>
      <Swiper
        from={1}
        minDistanceForAction={0.1}
        controlsProps={{
          dotsTouchable: true,
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
          }}
        >
          <Text>Slide 1</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
          }}
        >
          <Text>Slide 2</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.white,
          }}
        >
          <Text>Slide 3</Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IntroScreen;
