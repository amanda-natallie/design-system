import React, { useCallback, useState } from 'react';
import { ChevronDown } from 'react-feather';

import { AccordionProps } from '../../../../types/layout';
import { StyledMenuItem } from '../MenuItems/styles';
import { Arrow, ContentContainer, Label, LabelContainer } from './styles';

export const Accordion: React.FC<AccordionProps> = ({
  active,
  isExpanded,
  disabled,
  label,
  icon,
  onClick,
  children,
  collapsed,
}): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      if (!isExpanded && onClick) {
        onClick(event);
        if (!expanded) {
          setExpanded(true);
        }
      } else {
        setExpanded((state) => !state);
      }
    },
    [isExpanded, onClick, expanded]
  );

  const toggleExpanded = useCallback(
    (e: React.MouseEvent<HTMLOrSVGElement, MouseEvent>) => {
      setExpanded((state) => !state);
      e.stopPropagation();
    },
    [setExpanded]
  );

  return (
    <>
      <StyledMenuItem active={active} onClick={handleClick}>
        <LabelContainer>
          {icon}
          <Label disabled={disabled}>{label}</Label>
        </LabelContainer>
        {!collapsed && (
          <Arrow
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            expanded={expanded}
            onClick={toggleExpanded}
          >
            <ChevronDown />
          </Arrow>
        )}
      </StyledMenuItem>
      <ContentContainer expanded={expanded}>{children}</ContentContainer>
    </>
  );
};

export default Accordion;
