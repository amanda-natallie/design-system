import CreatableSelect from 'react-select/creatable';
import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
} from 'styled-components';

import { borders, fonts, spacing } from '../../theme';
import { palette } from '../../theme/colors';

interface Props {
  messageError?: boolean | null;
  hasIcon?: boolean;
  customStyles?: CSSObject | FlattenSimpleInterpolation;
  noLabel?: boolean;
}

export const StyledSearchSelect = styled(CreatableSelect)<Props>`
  & > div[class*='select__control'] {
    caret-color: ${palette.colors.red};
    background-color: ${palette.colors.white};
    border-radius: ${borders.radius.input};
    width: 100%;
    height: ${spacing.input};
    border: solid 1.5px
      ${({ messageError }): string =>
        messageError ? palette.colors.red : palette.colors.gray.lighter};

    color: ${palette.text.secondary};
    font-size: ${fonts.fontSizes.input};

    ${({ hasIcon }): string => (hasIcon ? 'padding-right: 30px;' : '')}

    ${({ customStyles }): CSSObject | FlattenSimpleInterpolation =>
      customStyles || {}}

	  ::placeholder {
      color: ${palette.colors.gray.medium};
    }

    :disabled {
      background-color: ${palette.colors.gray.lighter};
      cursor: not-allowed;
      &::placeholder {
        color: ${palette.text.disabled};
      }
    }
    &:focus {
      outline: none;
      border: inherit;
    }
  }
`;
