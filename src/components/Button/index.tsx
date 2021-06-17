import React from 'react';

interface Props {
  title: string;
  onClick?: (e: unknown) => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ title, onClick, disabled }) => (
  <div className="flex flex-row flex-1 justify-center w-full">
    <button
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1 }}
      type="submit"
      onClick={onClick || undefined}
      className="bg-blue hover:bg-darkBlue w-1/2 p-4 rounded-full"
    >
      <p className="font-bold text-center text-base text-white">{title}</p>
    </button>
  </div>
);

export default Button;
