import React from 'react';

import { FlexBoxProps } from '../../types/layout';
import { StyledFlexBox } from './styles';

export const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  isCard = false,
  verticalAlign = isCard && 'center',
  horizontalAlign = isCard && 'center',
  direction = 'column',
  ...props
}): JSX.Element => {
  return (
    <StyledFlexBox
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
      direction={direction}
      {...props}
    >
      {children}
    </StyledFlexBox>
  );
};
