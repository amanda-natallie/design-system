import React from 'react';

import { IconSearch } from '../../../icons/Search';
import { palette } from '../../../theme/colors';
import { HeaderProps } from '../../../types/layout';
import { pxToRem } from '../../../utils/grid';
import { Col } from '../../Grid/Col';
import Input from '../../Input';
import { StyledHeader } from './styles';
import Toolbar from './Toolbar';

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onChange,
  notifications,
  messages,
  user,
  searchPlaceholder,
  collapsed,
}) => {
  return (
    <StyledHeader
      initial={false}
      animate={{
        width: collapsed
          ? `calc(100vw - ${pxToRem(80)})`
          : `calc(100vw - ${pxToRem(280)})`,
      }}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.7, delay: 0.4 }}
    >
      <Col size={5} customStyles={{ paddingTop: '1rem' }}>
        <Input
          noLabel
          placeholder={
            searchPlaceholder
              ? searchPlaceholder
              : 'Digite o Número da Requisição'
          }
          value={searchTerm}
          onChange={onChange}
          customIcon={<IconSearch color={palette.colors.gray.light} />}
        />
      </Col>
      <Col size={4} collapse="md" />
      <Col>
        <Toolbar
          messages={messages}
          notifications={notifications}
          user={user}
        />
      </Col>
    </StyledHeader>
  );
};

export default Header;
