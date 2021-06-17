import React, { useCallback } from 'react';

import Button from '../../components/Button';
import Card from '../../components/Card';
import Form from '../../contexts/form';
import Field from '../../components/Field';
import Layout from '../../components/Layout';
import PasswordField from '../../components/PasswordField';
import { ScreenProps, ScreenType } from '../../components/Router/types';

import useRegisterForm from './useRegisterForm';

const Register: React.FC<ScreenProps> = ({ setScreen }) => {
  const onSuccees = useCallback(() => {
    setScreen(ScreenType.TryAgain);
  }, [setScreen]);

  const { handleSubmit, errors, setValue, pristine, submitting } = useRegisterForm(onSuccees);

  return (
    <Layout>
      <Card title="Sign Up">
        <Form errors={errors} setValue={setValue} handleSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row">
            <Field name="firstName" label="First Name" placeholder="ex. text" />
            <div className="lg:w-20" />
            <Field name="lastName" label="Last Name" placeholder="ex. text" />
          </div>
          <Field name="email" label="Your Email" placeholder="ex. text" />
          <PasswordField name="password" label="Password" type="password" />
          <PasswordField name="confirmPassword" label="Confirm Password" type="password" />
          <Button title="Submit" disabled={pristine || submitting} />
        </Form>
      </Card>
    </Layout>
  );
};

export default Register;
