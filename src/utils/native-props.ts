import type { CSSProperties } from 'react';

export interface NativeProps<S extends string = never> {
  /** 基础id remax **/
  id?: string;
  /** 基类 className **/
  className?: string;
  /** 基类 style **/
  style?: CSSProperties & Partial<Record<S, string>>;
}
