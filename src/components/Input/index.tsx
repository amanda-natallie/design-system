/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { css } from 'styled-components';

import * as Icon from '../../icons/';
import { palette } from '../../theme/colors';
import { InputProps } from '../../types/layout';
import { Typography } from '../Typography';
import {
  StyledChip,
  StyledContainer,
  StyledIconContainer,
  StyledInput,
  StyledWrapperError,
} from './styles';

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type = 'Typography',
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
  checked = false,
  customStyles,
  onIconClick,
  customIcon,
  messageError = null,
  showIconPassword = false,
  inputError = false,
  onClick,
  forwardRef,
  readonly,
  customInputProps,
  badge,
  label,
  noLabel = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const hasIcon = checked || showIconPassword || customIcon;

  function handleShowPassword(): void {
    if (setShowPassword) setShowPassword(!showPassword);
  }

  function handleIconClick(): void {
    if (showIconPassword) {
      handleShowPassword();
    } else {
      if (onIconClick) onIconClick();
    }
  }

  function handleType(type: string | DateConstructor | any): string {
    if (type === 'password' && showPassword) {
      return 'Typography';
    }

    if (type === 'password' && !showPassword) {
      return 'password';
    }

    if (type === Date && !showPassword) {
      return 'date';
    }

    return type;
  }

  return (
    <StyledContainer ref={forwardRef}>
      {label ? (
        <Typography
          as="label"
          htmlFor={id}
          customStyles={css`
            color: ${disabled
              ? palette.colors.gray.light
              : palette.colors.gray.darker};
          `}
        >
          {label}
        </Typography>
      ) : null}
      <StyledInput
        id={id}
        name={name}
        type={handleType(type)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        messageError={!!messageError || inputError}
        customStyles={customStyles}
        onClick={onClick}
        readOnly={readonly}
        autoComplete="off"
        {...customInputProps}
      />

      {hasIcon && (
        <StyledIconContainer onClick={handleIconClick} noLabel={noLabel}>
          {showIconPassword && (
            <div>
              {showPassword ? <Icon.IconEyeHide /> : <Icon.IconEyeShow />}
            </div>
          )}
          {customIcon && customIcon}
        </StyledIconContainer>
      )}
      {badge ? <StyledChip>{badge}</StyledChip> : null}

      {messageError && (
        <StyledWrapperError>
          <Icon.IconWarning />
          <Typography as="small">{messageError}</Typography>
        </StyledWrapperError>
      )}
    </StyledContainer>
  );
};

export default Input;
