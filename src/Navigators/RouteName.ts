// Parent Stack Names
export enum NavigationStackNames {
  SplashStack = 'SplashStack',
  AuthStack = 'AuthStack',
  MainStack = 'MainStack',
}

export enum SplashStack {
  SplashScreen = 'SplashScreen',
}

export enum AuthStack {
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
  ForgotPassStack = 'ForgotPassStack',
  OtpScreen = 'OtpScreen',
}

export enum BottomTab {
  HomeScreen = 'Home',
}

export enum ForgotPassStack {
  ForgotPassScreen = 'ForgotPassScreen',
  OtpScreen = 'OtpScreen',
  ResetPassScreen = 'ResetPassScreen',
}

const routeNames = {
  HomeTab: BottomTab,
  Stacks: NavigationStackNames,
  AuthStack: AuthStack,
  SplashStack: SplashStack,
}

export default routeNames
