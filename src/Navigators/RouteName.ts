// Navigation Stacks
export enum NavigationStackNames {
  WelcomeStack = 'WelcomeStack',
  AuthStack = 'AuthStack',
  HomeStack = 'HomeStack',
  MainStack = 'MainStack',
}

// Stack Screens
export enum WelcomeStack {
  WelcomeScreen = 'WelcomeScreen',
}

export enum AuthStack {
  SignInScreen = 'SignInScreen',
  SignUpScreen = 'SignUpScreen',
  ForgotPassStack = 'ForgotPassStack',
  OtpScreen = 'OtpScreen',
}

export enum HomeStack {
  HomeScreen = 'HomeScreen',
}

export enum BottomTab {
  BottomTab = 'BottomTab',
  HomeTab = 'HomeTab',
}

export enum ForgotPassStack {
  ForgotPassScreen = 'ForgotPassScreen',
  OtpScreen = 'OtpScreen',
  ResetPassScreen = 'ResetPassScreen',
}

// Route names
const routeNames = {
  BottomTab: BottomTab,
  Stacks: NavigationStackNames,
  AuthStack: AuthStack,
  WelcomeStack: WelcomeStack,
}

export default routeNames
