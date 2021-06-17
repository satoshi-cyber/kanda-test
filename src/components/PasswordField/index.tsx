import React, { useCallback, useState } from 'react';

import Field, { FieldProps } from '../Field';
import { HideIcon, RevealIcon } from './elements';

const PasswordField: React.FC<FieldProps> = ({ ...fieldProps }) => {
  const [reveal, setReveal] = useState(false);

  const handleButtonClick = useCallback(() => {
    setReveal(!reveal);
  }, [reveal]);

  const button = (
    <button type="button" className="focus:outline-none" onClick={handleButtonClick}>
      {reveal ? <HideIcon /> : <RevealIcon />}
    </button>
  );

  return <Field {...fieldProps} type={reveal ? 'text' : 'password'} helpButton={button} />;
};

export default PasswordField;
