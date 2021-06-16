import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';

import Layout from '../../components/Layout';
import { ScreenProps, ScreenType } from '../../components/Router/types';

const Register: React.FC<ScreenProps> = ({ setScreen }) => {
  const handleClick = () => {
    setScreen(ScreenType.Register);
  };

  return (
    <Layout>
      <Card title="You’re all set!">
        <Button title="Try Again" onClick={handleClick} />
      </Card>
    </Layout>
  );
};

export default Register;
