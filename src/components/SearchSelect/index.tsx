/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { css } from 'styled-components';

import { IconWarning } from '../../icons';
import { palette } from '../../theme/colors';
import { SearchSelectProps } from '../../types/layout';
import { StyledContainer, StyledWrapperError } from '../Input/styles';
import { Typography } from '../Typography';
import { StyledSearchSelect } from './styles';

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: state.isFocused
      ? '1px solid' + palette.colors.gray.light
      : '1px solid' + palette.colors.gray.light,
    boxShadow: 'none',
  }),
};

export const SearchSelect: FC<SearchSelectProps> = ({
  isLoading,
  options,
  selectedValue,
  setSelectedValue,
  isDisabled,
  name,
  className,
  label,
  id,
  messageError,
  placeholder,
}) => {
  const handleChange = (newValue: any, actionMeta: any): any => {
    console.group('Value Changed');
    setSelectedValue(newValue);
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  return (
    <StyledContainer>
      {label ? (
        <Typography
          as="label"
          htmlFor={id}
          customStyles={css`
            color: ${isDisabled
              ? palette.colors.gray.light
              : palette.colors.gray.darker};
          `}
        >
          {label}
        </Typography>
      ) : null}
      <StyledSearchSelect
        styles={customStyles}
        className={className}
        classNamePrefix="select"
        defaultValue={selectedValue}
        onChange={handleChange}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        name={name}
        options={options}
        placeholder={placeholder}
      />
      {messageError && (
        <StyledWrapperError>
          <IconWarning />
          <Typography as="small">{messageError}</Typography>
        </StyledWrapperError>
      )}
    </StyledContainer>
  );
};
