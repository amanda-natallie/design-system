import { rem } from 'polished';
import styled from 'styled-components';

import { AvatarProps } from '../../types/layout';

/* units */
const sizeUnit = 16;

/* sizes */
const createSize = (size: number): string => rem(`${size * sizeUnit}px`);

type SizesProps = {
  [key: string]: string;
};

const sizes = {
  sm: createSize(3),
  md: createSize(4),
  lg: createSize(5),
} as SizesProps;

const size = (size: string): string => {
  if (typeof sizes[size] !== 'undefined') {
    return sizes[size];
  } else {
    return sizes['md'];
  }
};

/* components */
const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;

const Wrapper = styled.div<AvatarProps>`
  box-sizing: border-box;
  border-radius: 50%;
  border: ${rem('2px')} solid #ddd;
  padding: ${rem('2px')};
  width: ${(props): string => size(props.size ?? 'md')};
  height: ${(props): string => size(props.size ?? 'md')};
  background-color: white;
`;

const Alt = styled.div<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props): string => props.color ?? '#ddd'};
`;

export default {
  Image,
  Wrapper,
  Alt,
};
