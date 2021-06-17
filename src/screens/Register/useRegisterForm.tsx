import { useMemo } from 'react';
import * as yup from 'yup';
import useForm from '../../hooks/useForm';
import errorMessages from './errorMessages';

interface RegisterFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const PASSWORD_CHECK_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const useRegisterForm = (onSuccess: () => void) => {
  const schema: yup.SchemaOf<RegisterFields> = useMemo(
    () =>
      yup.object({
        firstName: yup.string().required(errorMessages.firstNameRequired),
        lastName: yup.string().required(errorMessages.lastNameRequired),
        email: yup.string().email(errorMessages.emailValidate).required(errorMessages.emailRequired),
        password: yup
          .string()
          .required(errorMessages.passwordRequired)
          .matches(PASSWORD_CHECK_REGEX, errorMessages.passwordValidate),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], errorMessages.confirmPasswordValidate)
          .required(errorMessages.confirmPasswordRequired),
      }),
    [],
  );

  return useForm({ schema, onSuccess });
};

export default useRegisterForm;
