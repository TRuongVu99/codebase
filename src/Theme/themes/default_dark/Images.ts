/**
 * Images should be stored in the `App/Images` directory and referenced using variables defined here.
 */

export type ImageLocalType = 'defaultImage' | 'logo' | 'logoText' | 'logoLeaf'

export default {
  defaultImage: require('@/Assets/Images/defaultImage.png'),
  logo: require('@/Assets/Images/logo.png'),
  logoText: require('@/Assets/Images/logoText.png'),
  logoLeaf: require('@/Assets/Images/logoLeaf.png'),
}
