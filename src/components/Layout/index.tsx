/* eslint-disable @typescript-eslint/no-explicit-any */
import cookie from 'js-cookie';
import React, { useState } from 'react';

import { LayoutWrapperProps } from '../../types/layout';
import { pxToRem } from '../../utils/grid';
import { Header } from './Header';
import Sidebar from './Sidebar';
import { StyledLayout } from './styles';

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  menuItems,
  searchTerm,
  onChange,
  notifications,
  messages,
  user,
  children,
  searchPlaceholder,
}) => {
  const [collapsed, setCollapsed] = useState<any>(cookie.get('miniSidebar'));

  const expandSidebar = (): void => {
    cookie.remove('miniSidebar');
    setCollapsed(false);
  };
  const collapseSidebar = (): void => {
    cookie.set('miniSidebar', 'true', { expires: 365 });
    setCollapsed(true);
  };

  const handleSidebar = (): void => {
    cookie.get('miniSidebar') ? expandSidebar() : collapseSidebar();
  };

  return (
    <>
      <Header
        searchPlaceholder={searchPlaceholder}
        searchTerm={searchTerm}
        onChange={onChange}
        user={user}
        messages={messages}
        notifications={notifications}
        collapsed={collapsed}
      />
      <Sidebar
        menuItems={menuItems}
        collapsed={collapsed}
        setCollapsed={handleSidebar}
      />
      <StyledLayout
        initial={false}
        animate={{ paddingLeft: collapsed ? pxToRem(120) : pxToRem(280 + 30) }}
        transition={{ type: 'spring', bounce: 0.3, duration: 0.7, delay: 0.4 }}
        collapsed={collapsed}
      >
        {children}
      </StyledLayout>
    </>
  );
};

export default LayoutWrapper;
