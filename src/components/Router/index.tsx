import React, { useState } from 'react';
import Register from '../../screens/Register';
import TryAgain from '../../screens/TryAgain';
import { ScreenType } from './types';

const Router: React.FC = () => {
  const [screen, setScreen] = useState(ScreenType.Register);

  switch (screen) {
    case ScreenType.TryAgain:
      return <TryAgain setScreen={setScreen} />;
    default:
      return <Register setScreen={setScreen} />;
  }
};

export default Router;
