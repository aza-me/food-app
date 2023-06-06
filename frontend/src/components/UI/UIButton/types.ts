import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

export type UIButtonColor = 'primary';

export interface UIButtonDefaultProps {
  children?: ReactNode;
  color?: UIButtonColor;
  disabled?: boolean;
  loading?: boolean;
  outline?: boolean;
  fluid?: boolean;
  square?: boolean;
  count?: number;
  fitContent?: boolean;
  [key: string]: any;
}

export type UIButtonLink = UIButtonDefaultProps &
  LinkProps & {
    to: string;
  };

export type CommonButton = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export type IUIButton = UIButtonDefaultProps & CommonButton;

export type UIButtonProps = UIButtonLink | IUIButton;
