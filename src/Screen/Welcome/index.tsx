import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-web-swiper';
// Constants
import { kHeight, kWidth } from '@/Common/Constants';
import { Images, Layout } from '@/Theme';
// Components
import { LocalImage } from '@/Components/Image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '@/Theme/Variables';
import SvgWave from '@/Components/SvgWave';
import { IWelcomeItem, WelcomeItem } from './components/WelcomeItem';
import { Button } from '@/Components/Button';
import { sizeScale } from '@/Common/Scale';
import Animated, { Layout as LayoutAnimated } from 'react-native-reanimated';

const data: IWelcomeItem[] = [
  {
    source: Images.intro1,
    title: 'Create mini profiles for\neach of your houseplants',
    description: 'And add new plants as your\ncollection grows.',
  },
  {
    source: Images.intro2,
    title: 'Identify plant species by photo',
    description:
      "Automatically find your plant's\nspecies and keep a photo diary of\ntheir growth.",
  },
  {
    source: Images.intro3,
    title: 'Set a regular water and\nfeed schedule',
    description:
      'Get reminders on the day when your\nplants next need your attention.',
  },
  {
    source: Images.intro4,
    title: 'Diagnose common problems\nand watch your plants thrive!',
    description:
      'Get tips on how to care for your\nhome oasis and see it grow!',
  },
];

const IntroScreen = () => {
  const [activeIndex, setActiveindex] = useState<number>(0);

  const onChangeActive = () => {
    if (activeIndex === 3) {
      return setActiveindex(0);
    }
    setActiveindex(prev => prev + 1);
  };
  return (
    <View style={[Layout.fill, { backgroundColor: Colors.green5 }]}>
      <SvgWave
        customStyles={styles.svgCurve}
        customHeight={kHeight / 2.3}
        customTop={kHeight / 2.3 - 70}
        customWavePattern="M0,256L60,229.3C120,203,240,149,360,144C480,139,600,181,720,218.7C840,256,960,288,1080,272C1200,256,1320,192,1380,160L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      />
      <View>
        {activeIndex === 0 && (
          <WelcomeItem
            source={data[activeIndex].source}
            title={data[activeIndex].title}
            description={data[activeIndex].description}
          />
        )}
        {activeIndex === 1 && (
          <WelcomeItem
            source={data[activeIndex].source}
            title={data[activeIndex].title}
            description={data[activeIndex].description}
          />
        )}
        {activeIndex === 2 && (
          <WelcomeItem
            source={data[activeIndex].source}
            title={data[activeIndex].title}
            description={data[activeIndex].description}
          />
        )}
        {activeIndex === 3 && (
          <WelcomeItem
            source={data[activeIndex].source}
            title={data[activeIndex].title}
            description={data[activeIndex].description}
          />
        )}
      </View>
      <Button
        title="Next"
        outline
        outlineColor={Colors.white}
        textType="bold"
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={onChangeActive}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    width: kWidth,
  },
  button: {
    position: 'absolute',
    bottom: sizeScale(50),
    borderRadius: 50,
    marginTop: sizeScale(30),
    paddingHorizontal: sizeScale(25),
  },
  buttonText: {
    fontSize: sizeScale(16),
  },
});

export default IntroScreen;
