export enum ScreenType {
  Register = 'Register',
  TryAgain = 'TryAgain',
}

export interface ScreenProps {
  setScreen: (screen: ScreenType) => void;
}

export default undefined;
