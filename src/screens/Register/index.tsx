import React from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Field from '../../components/Field';
import Layout from '../../components/Layout';
import PasswordField from '../../components/PasswordField';
import { ScreenProps, ScreenType } from '../../components/Router/types';

const Register: React.FC<ScreenProps> = ({ setScreen }) => {
  const handleClick = () => {
    setScreen(ScreenType.TryAgain);
  };

  return (
    <Layout>
      <Card title="Sign Up">
        <div className="flex flex-row">
          <Field label="First Name" placeholder="ex. text" />
          <div className="w-20" />
          <Field label="Last Name" placeholder="ex. text" />
        </div>
        <Field label="Your Email" placeholder="ex. text" />
        <PasswordField
          label="Password"
          type="password"
          error="Password must be at least 8 characters with contains at least one uppercase letter, symbol and number"
        />
        <PasswordField label="Confirm Password" type="password" />
        <Button title="Submit" onClick={handleClick} />
      </Card>
    </Layout>
  );
};

export default Register;
