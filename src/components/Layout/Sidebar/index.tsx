import React from 'react';
import { ChevronsLeft } from 'react-feather';

import { FEMSABrand } from '../../../icons/FEMSABrand';
import { MenuItemsProps } from '../../../types/layout';
import { pxToRem } from '../../../utils/grid';
import MenuItems from './MenuItems';
import { StyledCollapseButton, StyledSidebar } from './styles';

interface SidebarProps extends MenuItemsProps {
  collapsed: boolean;
  setCollapsed: React.MouseEventHandler<HTMLButtonElement>;
}

export const MenuToggleButton: React.FC<Partial<SidebarProps>> = ({
  collapsed,
  setCollapsed,
}) => (
  <StyledCollapseButton
    animate={collapsed ? { rotate: 180 } : { rotate: 0 }}
    transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
    onClick={setCollapsed}
  >
    <ChevronsLeft size="20" />
  </StyledCollapseButton>
);

export const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  collapsed,
  setCollapsed,
}) => {
  return (
    <StyledSidebar
      initial={false}
      animate={{ width: collapsed ? pxToRem(80) : pxToRem(280) }}
      transition={{ type: 'spring', bounce: 0.3, duration: 0.7, delay: 0.4 }}
    >
      <MenuToggleButton collapsed={collapsed} setCollapsed={setCollapsed} />
      <FEMSABrand
        animate={{
          transform: `scale(${collapsed ? 1 : 0.5})`,
        }}
        transition={{ type: 'spring', bounce: 0.3, duration: 0.7, delay: 0.4 }}
      />
      <MenuItems menuItems={menuItems} collapsed={collapsed} />
    </StyledSidebar>
  );
};

export default Sidebar;
