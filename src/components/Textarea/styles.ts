import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { borders } from '../../theme';
import { palette } from '../../theme/colors';
import { StyledComponentProps } from '../../types/layout';

interface CustomProps extends StyledComponentProps {
  error?: boolean;
}

export const StyledTextarea = styled.textarea<
  CustomProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>`
  width: 100%;
  height: 100%;
  padding: 8px;
  min-height: 200px;
  border-radius: ${borders.radius.input};
  border: solid 1.5px
    ${({ error }): string =>
      error ? palette.colors.red : palette.colors.gray.lighter};
  resize: none;

  ${(props): CSSObject | FlattenSimpleInterpolation => props.customStyles || {}}
`;

export const StyledContainer = styled.div<CustomProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;
  ${(props): CSSObject | FlattenSimpleInterpolation => props.customStyles || {}}
`;
