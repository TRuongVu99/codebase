import { StyleProp, ViewStyle } from 'react-native';

export interface ISvgWave {
  customStyles?: StyleProp<ViewStyle>;
  customHeight?: number;
  customTop?: number;
  customBgColor?: string;
  customWavePattern?: string;
}
