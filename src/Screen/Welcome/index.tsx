import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
// Constants
import { kHeight, kWidth } from '@/Common/Constants';
import { Layout } from '@/Theme';
// Components
import { LocalImage } from '@/Components/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '@/Theme/Variables';
import SvgWave from '@/Components/SvgWave';

const IntroScreen = () => {
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.green3 }]}>
      <SvgWave
        customStyles={styles.svgCurve}
        customHeight={kHeight / 2.3}
        customTop={kHeight / 2.3 - 70}
        customWavePattern="M0,256L60,229.3C120,203,240,149,360,144C480,139,600,181,720,218.7C840,256,960,288,1080,272C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
      <Swiper from={1} minDistanceForAction={0.1} controlsEnabled={false}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.transparent,
          }}
        >
          <Text>Slide 1</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.transparent,
          }}
        >
          <Text>Slide 2</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.transparent,
          }}
        >
          <Text>Slide 3</Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  svgCurve: {
    width: kWidth,
  },
});

export default IntroScreen;
