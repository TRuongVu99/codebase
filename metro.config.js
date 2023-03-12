/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const { assetExts, sourceExts } = require('metro-config/src/defaults/defaults')

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
      },
      resolver: {
        assetExts: assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...sourceExts, 'svg'],
      },
    }),
  },
}
