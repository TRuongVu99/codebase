import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { CustomTextProps } from './Type';
import { sizeScale } from '@/Common/Scale';
import { kFontFamily } from '@/Common/Constants';

const ExtralBoldText = (props: CustomTextProps) => {
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[styles.text, props.style]}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizeScale(14),
    fontWeight: '900',
    fontFamily: kFontFamily.EXTRA_BOLD,
  },
});

export default ExtralBoldText;
