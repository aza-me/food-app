import React, { forwardRef } from 'react';
import cn from 'classnames';
import { TextField } from '@mui/material';
import { UIInputProps } from './types';
import './UIInput.scss';

export const UIInput: React.ForwardRefRenderFunction<{}, UIInputProps> = ({ className = '', ...rest }, _) => {
  return (
    <TextField
      {...rest}
      classes={{
        root: cn('ui-input', {
          'ui-input--with-icon': rest.InputProps?.endAdornment,
          [className]: className,
        }),
      }}
    />
  );
};

export default forwardRef(UIInput);
