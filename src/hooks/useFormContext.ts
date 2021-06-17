import { useContext } from 'react';
import { FormContext } from '../contexts/form';

const useFormContext = () => {
  return useContext(FormContext);
};

export default useFormContext;
