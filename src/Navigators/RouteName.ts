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
  OnBoardScreen = 'OnBoardScreen',
  WelcomeScreen = 'WelcomeScreen',
  LoginScreen = 'LoginScreen',
  SignUpScreen = 'SignUpScreen',
  ForgotPasswordScreen = 'ForgotPasswordScreen',
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
  ForgotPasswordScreen = 'ForgotPasswordScreen',
  OtpScreen = 'OtpScreen',
  ResetPassScreen = 'ResetPassScreen',
}

// Route names
const routeNames = {
  Stacks: NavigationStackNames,
  BottomTab: BottomTab,
  AuthStack: AuthStack,
  WelcomeStack: WelcomeStack,
};

export default routeNames;
