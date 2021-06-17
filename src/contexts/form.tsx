import React, { createContext } from 'react';

export interface IFormContext {
  handleSubmit(e: unknown): void;
  setValue(name: string, value: unknown): void;
  errors: Record<string, string>;
}

const INITIAL_VALUE = {
  handleSubmit: () => {
    throw new Error('Missing Provider');
  },
  setValue: () => {
    throw new Error('Missing Provider');
  },
  errors: {},
};

export const FormContext = createContext<IFormContext>(INITIAL_VALUE);

const Form: React.FC<IFormContext> = ({ children, handleSubmit, setValue, errors }) => {
  return (
    <FormContext.Provider value={{ handleSubmit, setValue, errors }}>
      <form className="w-full" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
