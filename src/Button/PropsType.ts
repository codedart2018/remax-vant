import { ReactNode } from 'react';
import { ButtonProps as RemaxButtonProps } from 'remax/one';
import { NativeProps } from '../utils/native-props';

export type ButtonProps = {
  children?: ReactNode;
} & NativeProps<'--rv-button-mini-height'> &
  Omit<RemaxButtonProps, 'size' | 'type'>;
