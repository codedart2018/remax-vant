import React from 'react';
import { Button } from '@remax/one';
import { ButtonProps } from './PropsType';

const VantButton = (props: ButtonProps) => {
  const { style, className, children, ...others } = props;

  return (
    <Button className={className} style={style} {...others}>
      {children}
    </Button>
  );
};

VantButton.defaultProps = {
  type: 'default',
  size: 'normal',
};

export default VantButton;
