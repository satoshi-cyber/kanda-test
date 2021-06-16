import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => (
  <button type="button" onClick={onClick} className="bg-blue bg-black w-1/2 p-4 rounded-full">
    <p className="font-bold text-center text-base text-white">{title}</p>
  </button>
);

export default Button;
