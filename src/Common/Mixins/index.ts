import { StyleSheet } from 'react-native';
import { sizeScale } from '../Scale';

export default StyleSheet.create({
  h1: {
    fontSize: sizeScale(26),
    lineHeight: 26 * 1.34,
  },
  h2: { fontSize: sizeScale(22), lineHeight: sizeScale(22) * 1.34 },
  h3: { fontSize: sizeScale(18), lineHeight: sizeScale(18) * 1.34 },
  h4: { fontSize: sizeScale(16), lineHeight: sizeScale(16) * 1.34 },
  h5: { fontSize: sizeScale(14), lineHeight: sizeScale(14) * 1.34 },
  h6: { fontSize: sizeScale(12), lineHeight: sizeScale(12) * 1.34 },
});
