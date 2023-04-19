import { kWidth } from '@/Common/Constants';
import { sizeScale } from '@/Common/Scale';
import { LocalImage } from '@/Components/Image';
import { BoldText, MediumText } from '@/Components/Text';
import { Fonts, Layout } from '@/Theme';
import { Colors } from '@/Theme/Variables';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  FadeOutDown,
  FadeOutUp,
  SlideInDown,
  SlideInUp,
} from 'react-native-reanimated';

export interface IWelcomeItem {
  source: string;
  title: string;
  description: string;
}

export const WelcomeItem = ({ source, title, description }: IWelcomeItem) => {
  return (
    <>
      <Animated.View
        entering={SlideInUp.duration(800)}
        exiting={FadeOutDown.duration(500)}
        style={[styles.infoContainer, Layout.center]}
      >
        <LocalImage source={source} resizeMode="contain" style={styles.image} />
      </Animated.View>
      <Animated.View
        entering={SlideInDown.duration(800)}
        exiting={FadeOutUp.duration(500)}
        style={[styles.infoContainer, { paddingTop: sizeScale(50) }]}
      >
        <BoldText style={[Fonts.h1, Fonts.textCenter, { color: Colors.white }]}>
          {title}
        </BoldText>
        <MediumText
          style={[
            Fonts.h3,
            Fonts.textCenter,
            { color: Colors.white, marginTop: sizeScale(10) },
          ]}
        >
          {description}
        </MediumText>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    height: '50%',
  },
  image: {
    width: kWidth / 1.5,
  },
});
