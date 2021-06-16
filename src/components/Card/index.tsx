import React from 'react';

interface Props {
  title?: string;
}

const Card: React.FC<Props> = ({ children, title }) => (
  <div className="flex flex-col lg:bg-white lg:shadow-md p-10 rounded-3xl w-full max-w-card p-4 items-center">
    {title && <p className="font-bold text-2xl mb-10">{title}</p>}
    {children}
  </div>
);

export default Card;
