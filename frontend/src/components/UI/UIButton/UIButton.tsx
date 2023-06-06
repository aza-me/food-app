import cn from 'classnames';
import React from 'react';
import { CommonButton, UIButtonProps } from './types';
import { CircularProgress } from '@mui/material';
import './UIButton.scss';

export const UIButton: React.FC<UIButtonProps> = (props) => {
  const render = () => {
    const {
      className = '',
      color = 'primary',
      text,
      to,
      loading,
      disabled,
      onClick,
      outline,
      size,
      fluid,
      tooltip,
      square,
      count,
      fitContent,
      children,
      ...rest
    } = props;

    const classNames = cn('ui-button', {
      [`ui-button--${color}`]: color,
      'ui-button__loading': loading,
      'ui-button__outline': outline,
      'ui-button__fluid': fluid,
      'ui-button__disabled': disabled,
      'ui-button__square': square,
      'ui-button__fit-content': fitContent,
      [`ui-button--${size}`]: size,
      [className]: className,
    });

    return (
      //@ts-ignore
      <button
        tabIndex={0}
        className={classNames}
        disabled={disabled || loading}
        {...(rest as CommonButton)}
        {...(loading || disabled ? {} : { onClick })}
      >
        {children}
        {loading && (
          <div className="ui-button__loader-container">
            <CircularProgress className="ui-button__loader" color="success" value={50} />
          </div>
        )}
      </button>
    );
  };
  return render();
};
