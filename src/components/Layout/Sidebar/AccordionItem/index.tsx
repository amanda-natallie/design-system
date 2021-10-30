import React from 'react';

import { AccordionItemProps } from '../../../../types/layout';
import { StyledAccordionItem } from './styles';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  label,
  action,
  disabled,
  active,
}) => (
  <StyledAccordionItem onClick={action} disabled={disabled} active={active}>
    {label}
  </StyledAccordionItem>
);
