import React from 'react';
import { css } from 'styled-components';

import { IconEmptyList } from '../../../icons';
import { StyledComponentProps } from '../../../types/layout';
import { pxToRem } from '../../../utils/grid';
import { FlexBox } from '../../FlexBox';
import { Typography } from '../../Typography';

interface Props extends StyledComponentProps {
  title: string;
  subtitle: string;
}

export const TableEmpty: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <FlexBox
      horizontalAlign="center"
      verticalAlign="center"
      customStyles={css`
        padding: ${pxToRem(48)};
      `}
    >
      <IconEmptyList />
      <FlexBox
        horizontalAlign="center"
        customStyles={css`
          width: 286px;
          height: 80px;
          margin-left: ${pxToRem(20)};
          & > p {
            margin-bottom: ${pxToRem(8)};
          }
        `}
      >
        <Typography as="h4">{title}</Typography>
        <Typography as="h5">{subtitle}</Typography>
      </FlexBox>
    </FlexBox>
  );
};

export default TableEmpty;
