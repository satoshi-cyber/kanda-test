import React from 'react';

import logo from '../../../../assets/images/logo.svg';
import logoMobile from '../../../../assets/images/logo-mobile.svg';

const Header: React.FC = () => (
  <div className="flex flex-grow-0 bg-white lg:bg-darkBlue p-9 pl-6 lg:p-10 lg:pl-20 shadow-md">
    <img src={logo} className="hidden lg:block" alt="logo" />
    <img src={logoMobile} className="lg:hidden" alt="logo" />
  </div>
);

export default Header;
