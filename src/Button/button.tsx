import React from 'react';
import { Button as RemaxButton } from '@remax/one';
import { ButtonProps } from './PropsType';

const Button = (props: ButtonProps) => {
  const { style, className, children, ...others } = props;

  return (
    <RemaxButton className={className} style={style} {...others}>
      {children}
    </RemaxButton>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'normal',
};

export default Button;
