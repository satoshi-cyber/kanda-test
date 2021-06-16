import React from 'react';
import Header from './components/Header';

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-1 items-stretch flex-col bg-white lg:bg-lightGray">
    <Header />
    <div className="flex flex-1 items-center justify-center p-4">{children}</div>
  </div>
);

export default Layout;
