import React from 'react';
import { AttentionIcon } from './elements';

export interface FieldProps {
  label?: string;
  placeholder?: string;
  helpButton?: React.ReactNode;
  error?: string;
  type?: 'text' | 'password';
}

const Field: React.FC<FieldProps> = ({ label, placeholder, helpButton, type, error }) => (
  <div className="flex flex-col w-full mb-8">
    <div className="flex flex-row w-full items-center">
      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <p className="text-base mb-0.5">{label}</p>
          <input type={type || 'text'} className="outline-none w-full" placeholder={placeholder} />
        </div>
      </div>
      {helpButton}
    </div>
    <div className="bg-gray h-px w-full" />
    {error && (
      <div className="flex flex-row">
        <AttentionIcon />
        <p className="text-xs text-red mt-2">{error}</p>
      </div>
    )}
  </div>
);

export default Field;
