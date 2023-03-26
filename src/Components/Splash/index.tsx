import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  FadeInDown,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
  ZoomInRotate,
} from 'react-native-reanimated';
// Components
import { LocalImage } from '../Image';
import { Images, Layout } from '@/Theme';
// Constants
import { kWidth } from '@/Common/Constants';
import { Colors } from '@/Theme/Variables';
import { getNavbarHeight, isIos } from '@/Common/Device';

interface ISplash {
  appLoadingComplete: boolean;
}

const SPRING_CONFIG = {
  mass: 1.5,
};

const Splash = ({ appLoadingComplete }: ISplash) => {
  const [animationIsVisible, setAnimationIsVisible] = useState<boolean>(true);
  const [logoTextIsVisiable, setLogoTextIsVisible] = useState<boolean>(false);
  const [logoLeafIsVisiable, setLogoLeafIsVisiable] = useState<boolean>(false);

  const rotate = useSharedValue('0deg');
  const translateY = useSharedValue(0);

  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: rotate.value }, { translateY: translateY.value }],
    };
  }, []);

  useEffect(() => {
    if (appLoadingComplete) {
      rotate.value = withDelay(500, withSpring('360deg', SPRING_CONFIG));
      translateY.value = withDelay(1800, withTiming(-70));
      setTimeout(() => {
        setLogoTextIsVisible(true);
      }, 2250);
      setTimeout(() => {
        setLogoLeafIsVisiable(true);
      }, 2600);
      setTimeout(() => {
        setAnimationIsVisible(false);
      }, 3500);
    }
  }, [appLoadingComplete]);

  return (
    <>
      {animationIsVisible && (
        <Animated.View
          exiting={FadeOut}
          style={[
            StyleSheet.absoluteFill,
            Layout.center,
            {
              paddingTop: !isIos ? getNavbarHeight() : 0,
              backgroundColor: Colors.white,
              zIndex: 999,
            },
          ]}
        >
          <Animated.View style={[logoStyle]}>
            <LocalImage
              source={Images.logo}
              style={{ width: 70, height: 70 }}
            />
          </Animated.View>
          <View style={[Layout.center, styles.wrapper]}>
            {logoTextIsVisiable && (
              <Animated.View style={styles.wrapper} entering={FadeInDown}>
                <LocalImage
                  source={Images.logoText}
                  style={{ height: 50, width: kWidth / 2 }}
                  resizeMode="contain"
                />
              </Animated.View>
            )}
            {logoLeafIsVisiable && (
              <Animated.View
                style={[
                  styles.wrapper,
                  {
                    right: -kWidth / 3,
                    bottom: 0,
                  },
                ]}
                entering={ZoomInRotate}
              >
                <LocalImage
                  source={Images.logoLeaf}
                  style={styles.leaf}
                  resizeMode="contain"
                />
              </Animated.View>
            )}
          </View>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
  },
  leaf: {
    height: 50,
    width: 50,
  },
});

export default Splash;
