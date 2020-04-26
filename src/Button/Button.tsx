import React, { FC, MouseEvent } from 'react';
import { ButtonStyle } from './style';

export interface Props {
  title?: string;
  action?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<Props> = ({ title, action }) => {
  return <ButtonStyle onClick={action}>{title || `some label`}</ButtonStyle>;
};
