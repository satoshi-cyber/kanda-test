import React, { ChangeEvent, useState } from 'react';
import useFormContext from '../../hooks/useFormContext';
import { AttentionIcon } from './elements';

export interface FieldProps {
  label?: string;
  placeholder?: string;
  helpButton?: React.ReactNode;
  type?: 'text' | 'password';
  name: string;
}

const Field: React.FC<FieldProps> = ({ label, name, placeholder, helpButton, type }) => {
  const [focused, setFocused] = useState(false);
  const { setValue, errors } = useFormContext();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value);
  };
  const error = errors[name];

  const handleBlur = () => {
    setFocused(false);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col w-full mb-8">
      <div className="flex flex-row w-full items-center">
        <div className="flex w-full">
          <div className="flex flex-col w-full">
            <p className="text-base mb-0.5">{label}</p>
            <input
              type={type || 'text'}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="outline-none w-full"
              placeholder={placeholder}
            />
          </div>
        </div>
        {helpButton}
      </div>
      <div className={focused ? 'bg-blue h-px w-full' : 'bg-gray h-px w-full'} />
      {error && (
        <div className="flex flex-row items-start">
          <AttentionIcon />
          <p className="text-xs text-red mt-2">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Field;
