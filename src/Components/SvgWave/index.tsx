import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { ISvgWave } from './Type';
import { Colors } from '@/Theme/Variables';

const SvgWave = ({
  customStyles,
  customHeight = 160,
  customTop = 130,
  customBgColor = Colors.white,
  customWavePattern = 'M0,32L60,53.3C120,75,240,117,360,160C480,203,600,245,720,224C840,203,960,117,1080,96C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z',
}: ISvgWave) => {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: customBgColor, height: customHeight }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: customTop }}
        >
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
};

export default SvgWave;

const styles = StyleSheet.create({});
