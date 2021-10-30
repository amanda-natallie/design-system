import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';
import { IconChevronDown, IconThreeDots } from '../../icons/';
import colors from '../../theme/colors';
import { DropdownProps } from '../../types/layout';
import { Button } from '../Button';
import {
  StyledArrow,
  StyledPopupActions,
  StyledThreeDotsButton,
} from './styles';

export const DropdownItem: React.FC<React.ComponentProps<typeof Button>> = ({
  customStyles,
  ...props
}) => {
  return (
    <Button
      variant="secondary"
      dropdownItem
      customStyles={{
        ...customStyles,
      }}
      {...props}
    ></Button>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({
  text,
  active = false,
  onClick,
  threeDots = false,
  customStyles,
  disabled = false,
  children,
}): JSX.Element => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const toggleActive = useCallback(() => {
    if (!disabled) {
      if (onClick) {
        onClick();
      } else {
        setIsActive(!isActive);
      }
    }
  }, [onClick, isActive, disabled]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  useOutsideAlerter(buttonRef, () => {
    if (isActive) toggleActive();
  });
  return (
    <div style={{ position: 'relative' }}>
      {threeDots ? (
        <StyledThreeDotsButton
          ref={buttonRef}
          onClick={toggleActive}
          type="button"
          disabled={disabled}
          customStyles={customStyles}
        >
          <IconThreeDots />
        </StyledThreeDotsButton>
      ) : (
        <Button
          dropdownItem
          forwardRef={buttonRef}
          onClick={toggleActive}
          variant="secondary"
          disabled={disabled}
          customStyles={{
            padding: '0 12px',
            justifyContent: 'space-between',
          }}
        >
          {text}
          <StyledArrow
            active={isActive}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 16 16"
          >
            <IconChevronDown
              color={disabled ? colors.colors.gray.lighter : colors.red}
            />
          </StyledArrow>
        </Button>
      )}
      <StyledPopupActions active={isActive} threeDots={threeDots}>
        {children}
      </StyledPopupActions>
    </div>
  );
};
