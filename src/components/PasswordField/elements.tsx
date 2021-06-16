import React, { FC } from 'react';

import hideIcon from '../../assets/images/hide-icon.svg';
import revealIcon from '../../assets/images/reveal-icon.svg';

export const HideIcon: FC = () => <img alt="hide" className="w-6" src={hideIcon} />;

export const RevealIcon: FC = () => <img alt="reveal" className="w-6" src={revealIcon} />;
